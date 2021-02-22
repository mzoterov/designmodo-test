<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

$db = new SQLite3("main.db");
$_POST = json_decode(file_get_contents("php://input"), true);
$text = $_POST['text'];
$allowedTags = array( 'br','strike', 'b','u');
$text = strip_tags($text, $allowedTags);
echo($text);
$text = htmlspecialchars($_POST['text'], ENT_QUOTES);
$stmt = $db->prepare('UPDATE settings SET text = :text');
$stmt->bindValue(":text", $text);
$result = $stmt->execute();

$stmt = $db->prepare('SELECT text FROM settings');
$result = $stmt->execute();
$text = $result->fetchArray(SQLITE3_ASSOC);
$text = $text["text"];

