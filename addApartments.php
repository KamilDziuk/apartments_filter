<?php
require_once 'config/config.php';
$servername = $config['servername'];
$username = $config['username'];
$password = $config['password'];
$dbname = $config['dbname'];
$conn = new mysqli($servername, $username, $password, $dbname);
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Połączenie nieudane: " . $conn->connect_error);
}
$data = json_decode(file_get_contents("php://input"), true);
foreach ($data as $apartment) {
    $building = $conn->real_escape_string($apartment['building']);
    $numebrBuilding = $apartment['numebrBuilding'];
    $firstNameAndLastName = $conn->real_escape_string($apartment['firstNameAndLastName']);
    $surface = $apartment['surface'];
    $floors = $apartment['floors'];
    $status = $conn->real_escape_string($apartment['status']);
    
    $sql = "INSERT INTO apartments (building, numebrBuilding, firstNameAndLastName, surface, floors, status) 
            VALUES ('$building', $numebrBuilding, '$firstNameAndLastName', $surface, $floors, '$status')";
    $conn->query($sql);
}
$conn->close();
?>