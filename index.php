<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Apartment filters</title>
</head>
<body>
<div class="form-container">
<form action="submit.php" method="post" class="addApartments">
<link rel="stylesheet" type="text/css" href="style.css">
<script src="script.js" defer></script>
  <h2>Dodaj Klienta</h2>
    <label for="building">Budynek:</label>
    <input type="text" id="buildingInput" name="building" oninput="transformToUppercase()" required><br><br>
    <label for="numebrBuilding">Numer Budynku:</label>
    <input type="number" name="numebrBuilding" required><br><br>
    <label for="firstNameAndLastName">Imię i Nazwisko:</label>
    <input type="text" name="firstNameAndLastName" required><br><br>
    <label for="surface">Powierzchnia:</label>
<input type="number" name="surface" step="any" required><br><br>
    <label for="floors">Liczba Pięter:</label>
    <input type="number" name="floors" required><br><br>
    <label for="status">Status:</label>
    <input type="text" name="status" required><br><br>
    <input type="submit" value="Dodaj klienta">
</form>
<form action="deleteApartments.php" method="post" class="deleteApartments">
<h2>Usuń Klienta</h2>
  <input type="hidden" name="action" value="delete">
  <label for="idToDelete">Podaj id klienta:</label>
  <input type="number" name="idToDelete" required><br><br>
  <input type="submit" value="Usuń klienta">
</form>
</div>
<br>
<br><br>
<form action="display.php" method="post">
     <input type="submit" value="Zobacz całą listę">
 </form>
<br><br>
<form id="form">
  <div id="statisticians">
    <div id="bContainer">
      <p>Budynek B</p>
      Liczba wolnych mieszkań (aktualny stan): <button id="free-bContainer"> Wolne</button><div id="free-bContainer-result"></div><div id="bapartmentsFree"></div>
      Liczba zajętych mieszkań (aktualny stan): <button id="booked-bContainer"> Zajęte </button><div id="booked-bContainer-result"></div><div id="bapartmentsBooked"></div>
    </div>
    <div id="cContainer">
      <p>Budynek C</p>
      Liczba wolnych mieszkań (aktualny stan): <button id="free-cContainer"> Wolne</button><div id="free-cContainer-result"></div><div id="capartmentsFree"></div>
      Liczba zajętych mieszkań (aktualny stan): <button id="booked-cContainer"> Zajęte </button><div id="booked-cContainer-result"></div><div id="capartmentsBooked"></div>
    </div>
    <div style="clear:both;"></div>
</div>
<label>
  Budynek<br>
<input type="text" name="buildingForm" id="buildingForm" oninput="transformToUppercase()" placeholder=" od"> 
<input type="text" name="buildingTo" id="buildingTo"  oninput="transformToUppercase()"placeholder=" do">
</label>
<label>
Powierzchnia<br>
<input type="text" name="powOd" placeholder=" od"> 
<input type="range" name="pow" min="0" max="80" value="0" oninput="powOd.value = pow.value; updatePow()">
<input type="text" name="powDo" placeholder=" do">
</label>
<label>
  Piętra<br>
<input type="text" name="floorsOd" placeholder=" od">
</ul>
<input type="range" name="floors" min="0" max="4" value="0" oninput="floorsOd.value = floors.value; updateFloors()">
<input type="text" name="floorsDo" placeholder=" do">
<label>
  <br>
Filtruj <br>
<form class="checkbox-filter">
  <input type="checkbox" id="sort-free-checkbox"> Wolne
  <input type="checkbox" id="sort-soccupied-checkbox"> Zajęte
<input type="checkbox" id="sort-most-surface-checkbox"> m<sup>2</sup> max
<input type="checkbox" id="sort-least-surface-checkbox"> m<sup>2</sup> min
</label>
</form>
<label>
<button type="button" name="submit" onclick="selectApartments()">Wybierz</button>
</label>
</form>
<div id="result"></div>
<?php
require_once 'config/config.php';
$servername = $config['servername'];
$username = $config['username'];
$password = $config['password'];
$dbname = $config['dbname'];
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM apartments";
$result = $conn->query($sql);
$apartments = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $apartments[] = $row;
    }
}
$conn->close();
?>
<script>
var apartments = <?php echo json_encode($apartments); ?>;
</script>
</body>
</html>