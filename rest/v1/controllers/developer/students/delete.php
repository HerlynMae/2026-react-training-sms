<?php

//declaration of connection to the database
$conn = null;
$conn = checkDbConnection(); //set connection to the database

//store model class in variable
$val = new Students($conn);

//to check parameter in the url
if (array_key_exists('id', $_GET)) {

    $val->students_aid = $_GET['id']; //set the students_id to the value of the students_id in the request body
    checkId($val->students_aid);

    $query = checkDelete($val); //call the checkCreate function to create a new student and store the result in the variable $query
    returnSuccess($val, "Students", $query); //call the returnSuccess function to return a success response to the frontend client
}
checkEndpoint();
