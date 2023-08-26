
<link rel="stylesheet" type="text/css" href="style.css">
<form action="index.php" method="post">
    <input type="submit" value="Wróć do programu">
</form>
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
$building = $_POST['building'];
$numebrBuilding = $_POST['numebrBuilding'];
$firstNameAndLastName = $_POST['firstNameAndLastName'];
$surface = $_POST['surface'];
$floors = $_POST['floors'];
$status = $_POST['status'];
$sql = "INSERT INTO apartments (building, numebrBuilding, firstNameAndLastName, surface, floors, status)
        VALUES ('$building', '$numebrBuilding', '$firstNameAndLastName', '$surface', '$floors', '$status')";
if ($conn->query($sql) === TRUE) {
    echo "Nowy apartament został dodany!";
} else {
    echo "Błąd: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>