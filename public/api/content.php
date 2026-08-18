<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, X-Admin-Password");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$file_path = __DIR__ . '/../content.json';
$password_file = __DIR__ . '/../admin_password.txt';

// Default password if not set
$default_password = 'admin';

// Helper to get active password
function getAdminPassword($password_file, $default_password) {
    if (file_exists($password_file)) {
        return trim(file_get_contents($password_file));
    }
    return $default_password;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($file_path)) {
        echo file_get_contents($file_path);
    } else {
        echo json_encode(new stdClass());
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get headers
    $headers = getallheaders();
    $provided_password = isset($headers['X-Admin-Password']) ? trim($headers['X-Admin-Password']) : '';
    
    // Fallback: check POST parameters
    $input_raw = file_get_contents('php://input');
    $input_data = json_decode($input_raw, true);
    
    if (isset($input_data['password'])) {
        $provided_password = trim($input_data['password']);
    }
    if (isset($_POST['password'])) {
        $provided_password = trim($_POST['password']);
    }

    $active_password = getAdminPassword($password_file, $default_password);

    if ($provided_password !== $active_password) {
        http_response_code(401);
        echo json_encode(["error" => "Unauthorized: Incorrect password"]);
        exit;
    }

    // Check if it is a file upload
    if (isset($_FILES['image'])) {
        $file = $_FILES['image'];
        
        if ($file['error'] !== UPLOAD_ERR_OK) {
            http_response_code(400);
            echo json_encode(["error" => "File upload error code: " . $file['error']]);
            exit;
        }
        
        $allowed_exts = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'ico'];
        $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
        if (!in_array($ext, $allowed_exts)) {
            http_response_code(400);
            echo json_encode(["error" => "File extension not allowed: $ext"]);
            exit;
        }
        
        $upload_dir = __DIR__ . '/../images/uploads/';
        if (!file_exists($upload_dir)) {
            mkdir($upload_dir, 0755, true);
        }
        
        $safe_name = preg_replace('/[^a-zA-Z0-9_\-\.]/', '', basename($file['name']));
        $file_name = time() . '_' . $safe_name;
        $target_file = $upload_dir . $file_name;
        
        if (move_uploaded_file($file['tmp_name'], $target_file)) {
            echo json_encode([
                "success" => true,
                "url" => "./images/uploads/" . $file_name
            ]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Failed to move uploaded file"]);
        }
        exit;
    }

    // Check if it is a special request
    if (isset($input_data['action'])) {
        if ($input_data['action'] === 'check_password') {
            echo json_encode(["success" => true, "message" => "Password is correct"]);
            exit;
        }
        if ($input_data['action'] === 'change_password') {
            $new_password = isset($input_data['new_password']) ? trim($input_data['new_password']) : '';
            if (strlen($new_password) < 4) {
                http_response_code(400);
                echo json_encode(["error" => "Password must be at least 4 characters long"]);
                exit;
            }
            file_put_contents($password_file, $new_password);
            echo json_encode(["success" => true, "message" => "Password changed successfully"]);
            exit;
        }
    }

    // Otherwise, save content
    $content_to_save = isset($input_data['data']) ? $input_data['data'] : $input_data;
    
    // Remove password field if nested
    if (isset($content_to_save['password'])) {
        unset($content_to_save['password']);
    }

    $json_string = json_encode($content_to_save, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    
    if (file_put_contents($file_path, $json_string) !== false) {
        echo json_encode(["success" => true, "message" => "Content saved successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to write to file"]);
    }
    exit;
}
?>
