<?php 

//this setup accepts data types, not files or image
header("Content-Type: application/json;");

//this setup accepts any link who wants to use our api
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Origin: http:www.google.com"); //production 

//this setup is for security purposes
// header("Access-Control-Allow-Credentials: true"); //for production

//this setup is what does method accepts in our application
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");

//this setup is for date of the server
date_default_timezone_set("Asia/Manila");