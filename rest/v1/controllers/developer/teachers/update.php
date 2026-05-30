<?php

//declaration of connection to the database
$conn = null;
$conn = checkDbConnection(); //set connection to the database
$body = file_get_contents("php://input"); 
$data = json_decode($body, true);

//store model class in variable
$val = new Teachers($conn);

$val->teachers_aid = $_GET['id'];

$val->teachers_id = $data['teachers_id']; 
$val->teachers_first_name = $data['teachers_first_name']; 
$val->teachers_middle_name = $data['teachers_middle_name']; 
$val->teachers_last_name = $data['teachers_last_name']; 
$val->teachers_subject = $data['teachers_subject']; 
$val->teachers_email = $data['teachers_email']; 
$val->teachers_updated = date("Y-m-d H:i:s"); 

// validation
checkId($val->teachers_aid);
$query = checkUpdate($val); 
returnSuccess($val, "Teachers", $query); 