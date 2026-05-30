<?php



// //this setup accepts data types, not files or image
// header("Content-Type: application/json");

// //this setup accepts any link who wants to use our api
// header("Access-Control-Allow-Origin: *"); //localhost

// // header("Access-Control-Allow-Origin: http:www.google.com"); //production 

// //this setup is for security purposes
// // header("Access-Control-Allow-Credentials: true"); //for production

// header("Access-Control-Allow-Headers: Content-Type, Authorization");

// //this setup is what does method accepts in our application
// header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");


// header("Access-Control-Max-Age: 86400");

// if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
//     http_response_code(200);
//     exit();
// }

// //this setup is for date of the server
// date_default_timezone_set("Asia/Manila");


header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Max-Age: 86400");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
//this setup is for date of the server
date_default_timezone_set("Asia/Manila");
