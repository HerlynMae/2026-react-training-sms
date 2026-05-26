<?php

// Database::connectDb() - this is a static method that can be called without creating an instance of the Database class. It is used to establish a connection to the database and return the connection object. 


class Database
{
    private static $dbConnection;

    public static function connectDb()
    {
        //local configuration
        $host = "localhost";
        $dbName = "viter-sms_v1";
        $username = "root";
        $password = "";

        //production configuration
        // $host = "localhost";
        // $dbName = "viter-sms_v1";
        // $username = "root";
        // $password = "";


        //self - Database
        //:: - scope resolution operator - used to access static properties and methods of a class. 
        //$dbConnection - static property that holds the database connection object. It is shared across all instances of the Database class.
        if (self::$dbConnection == null) {
            //PDO - PHP Data Objects -connection between PHP and a database server. 
            //It provides a consistent interface for accessing databases and executing SQL queries, regardless of the database management system being used.

            //connection to database
            //parameters - it is the data that we want to send (coma separated)
            //first parameter - connection  string to database host and database name
            //second parameter - username for database connection
            //third parameter - password for database connection
            self::$dbConnection = new PDO("mysql:host={$host};dbname={$dbName};", $username, $password);

            //for error handling - if there is an error in the database connection, an exception error will be thrown.
            //setAttribute - it is used to set the error mode of the database connection. 
            //It is set to ERRMODE_EXCEPTION, which means that if there is an error in the database connection, an exception will be thrown.
            self::$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


            //for security - it is used to prevent SQL injection attacks.
            // ATTR_EMULATE_PREPARES - it is used to disable emulation of prepared statements. 
            // This means that the database server will handle the preparation and execution of SQL statements, rather than the PHP PDO library. 
            self::$dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        }

        return self::$dbConnection;
    }
}
