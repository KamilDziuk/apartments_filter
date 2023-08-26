<!DOCTYPE html>
<html>
<head>
     <meta charset="UTF-8"> 
    <title>Wyświetlanie danych</title>
</head>
<body>
<form action="index.php" method="post">
    <input type="submit" value="Wróć do programu">
</form>
<table>
    <tr>    
        <th>Id</th>
        <th>Numer apartamentu</th>
        <th>Budynek</th>
        <th>Imię i nazwisko</th>
        <th>Powierzchnia</th>
        <th>Piętra</th>
        <th>Status</th>
    </tr>
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
    $sql = "SELECT * FROM apartments";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['numebrBuilding'] . "</td>";
            echo "<td>" . $row['building'] . "</td>";
            echo "<td>" . $row['firstNameAndLastName'] . "</td>";
            echo "<td>" . $row['surface'] . "</td>";
            echo "<td>" . $row['floors'] . "</td>";
            echo "<td>" . $row['status'] . "</td>";
            echo "</tr>";
        }
    } else {
        echo "Brak danych do wyświetlenia.";
    }
    $conn->close();
    ?>
</table>
</body>
</html>