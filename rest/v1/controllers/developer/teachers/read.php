<?php


$conn = null;
$conn = checkDbConnection();
$body = file_get_contents("php://input"); 
$data = json_decode($body, true);

//use models
$val = new Teachers($conn);


if (array_key_exists('id', $_GET)) { 
    $val->teachers_aid = $_GET['id']; 
    checkId($val->teachers_aid); 
    $query = checkReadById($val); 
    http_response_code(200); 
    getQueriedData($query); 

}



if (empty($_GET)) {
    $query = checkReadAll($val);
    http_response_code(200); 
    getQueriedData($query); 
}

checkEndpoint();
