<?php

//declaration of connection to the database
$conn = null;
$conn = checkDbConnection(); //set connection to the database

//store model class in variable
$val = new Students($conn);

$val->students_aid = $_GET['id'];

$val->students_id = $data['students_id']; //set the students_id to the value of the students_id in the request body
$val->students_first_name = $data['students_first_name']; //set the students_first_name to the value of the students_first_name in the request body
$val->students_middle_name = $data['students_middle_name']; //set the students_middle_name to the value of the students_middle_name in the request body
$val->students_last_name = $data['students_last_name']; //set the students_last_name to the value of the students_last_name in the request body
$val->students_grade = $data['students_grade']; //set the students_grade to the value of the students_grade in the request body
$val->students_section = $data['students_section']; //  set the students_section to the value of the students_section in the request body
$val->students_updated = date("Y-m-d H:i:s"); //set the students_updated to the current date and time

// validation
checkId($val->students_aid);

$query = checkUpdate($val); //call the checkCreate function to create a new student and store the result in the variable $query
returnSuccess($val, "Students", $query); //call the returnSuccess function to return a success response to the frontend client