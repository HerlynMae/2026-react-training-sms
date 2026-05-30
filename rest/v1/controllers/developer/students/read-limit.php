<?php

$conn = checkDbConnection();
$body = file_get_contents("php://input");
$data = json_decode($body, true);

$val = new Students($conn);

// default = 5, override if may limit
$val->limit = isset($_GET['limit']) ? (int) $_GET['limit'] : 5;

$query = checkReadLimit($val);

http_response_code(200);
getQueriedData($query);

checkEndpoint();
