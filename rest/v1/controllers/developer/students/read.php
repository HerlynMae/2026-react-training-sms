<?php

//check database connection
$conn = null;
$conn = checkDbConnection(); //set connection to the database

//use models
$val = new Students($conn);

//students?id=12
//this is for request with specific id in the url parameter
if (array_key_exists('id', $_GET)) { //to check parameter in the url
    $val->students_aid = $_GET['id']; //set the students_aid to the value of the id in the url parameter
    checkId($val->students_aid); //call the checkId function to check if the id is valid
    $query = checkReadById($val); //call the checkReadAll function to read all students and store the result in the variable $query
    http_response_code(200); //set the http response code to 200
    getQueriedData($query); //call the getResultData function to return the data to the frontend client

}

//students
//this is for request without specific id in the url parameter to read all data
if (empty($_GET)) {
    $query = checkReadAll($val); //call the checkReadAll function to read all students and store the result in the variable $query
    http_response_code(200); //set the http response code to 200
    getQueriedData($query); //call the getQueryData function to return the data to the frontend client
}

checkEndpoint();
