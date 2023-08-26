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
if ($conn->connect_error) {
    die("Połączenie nieudane: " . $conn->connect_error);
}
if (isset($_POST['action'])) {
    if ($_POST['action'] === 'add') {
        $building = $_POST['building'];
        $numebrBuilding = $_POST['numebrBuilding'];
        $firstNameAndLastName = $_POST['firstNameAndLastName'];
        $surface = $_POST['surface'];
        $floors = $_POST['floors'];
        $status = $_POST['status'];
    } elseif ($_POST['action'] === 'delete') {
        $idToDelete = $_POST['idToDelete'];
        $deleteSql = "DELETE FROM apartments WHERE id = '$idToDelete'";
        if ($conn->query($deleteSql) === TRUE) {
            echo "klient o id: $idToDelete został usunięty!";
        } else {
            echo "Błąd: " . $deleteSql . "<br>" . $conn->error;
        }
    }
}
$conn->close();
?>