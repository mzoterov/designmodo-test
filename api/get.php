<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

$db = new SQLite3("main.db");
$stmt = $db->prepare('SELECT text FROM settings');

$result = $stmt->execute();
$text = $result->fetchArray(SQLITE3_ASSOC);

$text = $text["text"];

$shieldedTags = array( '&lt;br&gt;','&lt;strike&gt;', '&lt;/strike&gt;', '&lt;i&gt;', '&lt;/i&gt;',  '&lt;b&gt;', '&lt;/b&gt;', '&lt;u&gt;', '&lt;/u&gt;' );
$replaceTags = array( '<br>','<strike>', '</strike>', '<i>', '</i>', '<b>', '</b>', '<u>', '</u>' );

$content = str_replace( $shieldedTags, $replaceTags, $text );
echo $content;