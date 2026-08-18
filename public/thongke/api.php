<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

require_once 'db.php';

$action = isset($_GET['action']) ? $_GET['action'] : '';

try {
    $db = getDB();

    switch ($action) {
        case 'list':
            $stmt = $db->query("SELECT * FROM products ORDER BY updated_at DESC");
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Decode JSON strings back to arrays
            foreach ($products as &$p) {
                $p['exportHistory'] = json_decode($p['exportHistory'], true) ?: [];
                $p['returnHistory'] = json_decode($p['returnHistory'], true) ?: [];
                $p['totalImport'] = (int)$p['totalImport'];
            }
            
            echo json_encode(['success' => true, 'data' => $products]);
            break;

        case 'save':
            $input = json_decode(file_get_contents('php://input'), true);
            if (!$input) throw new Exception('Invalid input');

            $sql = "INSERT INTO products (id, sku, name, color, unit, totalImport, exportHistory, returnHistory, note) 
                    VALUES (:id, :sku, :name, :color, :unit, :totalImport, :exportHistory, :returnHistory, :note)
                    ON DUPLICATE KEY UPDATE 
                    sku = VALUES(sku), 
                    name = VALUES(name), 
                    color = VALUES(color), 
                    unit = VALUES(unit), 
                    totalImport = VALUES(totalImport), 
                    exportHistory = VALUES(exportHistory), 
                    returnHistory = VALUES(returnHistory), 
                    note = VALUES(note)";
            
            $stmt = $db->prepare($sql);
            $stmt->execute([
                ':id' => $input['id'],
                ':sku' => $input['sku'],
                ':name' => $input['name'],
                ':color' => isset($input['color']) ? $input['color'] : '',
                ':unit' => isset($input['unit']) ? $input['unit'] : 'Cái',
                ':totalImport' => isset($input['totalImport']) ? (int)$input['totalImport'] : 0,
                ':exportHistory' => json_encode(isset($input['exportHistory']) ? $input['exportHistory'] : []),
                ':returnHistory' => json_encode(isset($input['returnHistory']) ? $input['returnHistory'] : []),
                ':note' => isset($input['note']) ? $input['note'] : ''
            ]);

            echo json_encode(['success' => true]);
            break;

        case 'delete':
            $input = json_decode(file_get_contents('php://input'), true);
            if (!isset($input['id'])) throw new Exception('Missing ID');

            $stmt = $db->prepare("DELETE FROM products WHERE id = :id");
            $stmt->execute([':id' => $input['id']]);

            echo json_encode(['success' => true]);
            break;

        case 'sync':
            // Bulk sync for migration
            $input = json_decode(file_get_contents('php://input'), true);
            if (!is_array($input)) throw new Exception('Invalid data format');

            $db->beginTransaction();
            $sql = "INSERT INTO products (id, sku, name, color, unit, totalImport, exportHistory, returnHistory, note) 
                    VALUES (:id, :sku, :name, :color, :unit, :totalImport, :exportHistory, :returnHistory, :note)
                    ON DUPLICATE KEY UPDATE 
                    sku = VALUES(sku), name = VALUES(name), color = VALUES(color), unit = VALUES(unit), 
                    totalImport = VALUES(totalImport), exportHistory = VALUES(exportHistory), 
                    returnHistory = VALUES(returnHistory), note = VALUES(note)";
            
            $stmt = $db->prepare($sql);
            foreach ($input as $p) {
                $stmt->execute([
                    ':id' => $p['id'],
                    ':sku' => $p['sku'],
                    ':name' => $p['name'],
                    ':color' => isset($p['color']) ? $p['color'] : '',
                    ':unit' => isset($p['unit']) ? $p['unit'] : 'Cái',
                    ':totalImport' => isset($p['totalImport']) ? (int)$p['totalImport'] : 0,
                    ':exportHistory' => json_encode(isset($p['exportHistory']) ? $p['exportHistory'] : []),
                    ':returnHistory' => json_encode(isset($p['returnHistory']) ? $p['returnHistory'] : []),
                    ':note' => isset($p['note']) ? $p['note'] : ''
                ]);
            }
            $db->commit();

            echo json_encode(['success' => true, 'count' => count($input)]);
            break;

        case 'clear':
            // Delete all products
            $db->exec("DELETE FROM products");
            echo json_encode(['success' => true]);
            break;

        default:
            throw new Exception('Unknown action');
    }

} catch (Exception $e) {
    if (isset($db) && $db->inTransaction()) $db->rollBack();
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
