<?php

//declaration of connection to the database
$conn = null;
$conn = checkDbConnection(); //set connection to the database
$body = file_get_contents("php://input"); 
$data = json_decode($body, true);

//store model class in variable
$val = new Teachers($conn);

//to check parameter in the url
if (array_key_exists('id', $_GET)) {

    $val->teachers_aid = $_GET['id']; 
    checkId($val->teachers_aid);

    $query = checkDelete($val);
    returnSuccess($val, "Teachers", $query); 
}
checkEndpoint();
