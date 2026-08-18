<?php
/**
 * Database Configuration & Initialization
 */

$host = 'localhost';
$dbname = 'ins51814_inspur_kho';
$username = 'ins51814_inspur_kho';
$password = 'L5Kq#i8Guy0z&sqp';

try {
    $pdo = new PDO("mysql:host=$host", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create database if not exists
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$dbname` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `$dbname`;");

    // Create products table
    $sql = "CREATE TABLE IF NOT EXISTS products (
        id VARCHAR(50) PRIMARY KEY,
        sku VARCHAR(100) NOT NULL,
        name VARCHAR(255) NOT NULL,
        color VARCHAR(100),
        unit VARCHAR(50),
        totalImport INT DEFAULT 0,
        exportHistory LONGTEXT,
        returnHistory LONGTEXT,
        note TEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";
    
    $pdo->exec($sql);

} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

/**
 * Helper to get PDO instance
 */
function getDB() {
    global $pdo;
    return $pdo;
}
?>
