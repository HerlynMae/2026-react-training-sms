<?php 
// data types
$numberValue = 123.000; //integer
$stringValue = "Hello World"; //string
$booleanValue = "true"; //boolean
$floatValue = 3.14; //float / number w/ decimal
$arrayValue = [1, 2, 3, 4, 5]; //array - life start at 0 - index 0
$objectValue = ['name' => 'John', 'age' => 30]; //object
$nullValue = null; //null - none at all
$undefinedValue = 'undefined'; //undefined - there is no value / no access / there's an error
$stringValue = "Hello World{$numberValue}"; //combine
$arrayValue1 = ['Hello', 1, 2, 3, 4, 5]; //combine
$arrayObject = [
    array(
    'name' => 'John',
    'age' => 30,
    'hobbies' => ['reading', 'gaming', 'coding']
    ),
       array(
    'name' => 'Ella',
    'age' => 28,
    'hobbies' => ['watching', 'painting', 'dancing']
    ),
   
]; //array of object

//declare variable $i for initial loop through the array starts at 0;
//check the length of variable $i in the condition if $i is less than the length of $arrayValue;
//lastly increment the variable $i;

for($i = 0; $i < count($arrayValue1); $i++){
    //variable $i = index
    echo $arrayValue1[$i] . "<br/>";
}

foreach ($arrayObject as $value){
    echo "Name: " . $value['name'] . "<br/>";
}

foreach ($arrayObject as $index => $value){
    echo "{$index}: " . $value['name'] . "<br/>";
}


foreach ($arrayObject as $value){
    echo "Name: " . $value['name'] . "<br/>";
    foreach ($value['hobbies'] as $i => $hobby) {
        $number = $i + 1;
        echo "habbits {$number}: " . $hobby . "<br/>";
    }
}

echo 123;