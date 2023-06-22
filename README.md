[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/t8aS1bkC)
<!DOCTYPE html>
<html>
<head>
  <title>Konversi Suhu</title>
  <link rel="stylesheet" href="css/suhu.css">
</head>
<body>
  <h1>Konversi Suhu</h1>
  <label>Masukkan angka:</label>
  <input type="number" id="inputAngka" placeholder="Masukkan angka">

  <label>Pilih jenis suhu:</label>
  <select id="jenisSuhu">
    <option value="celsius">Celsius</option>
    <option value="fahrenheit">Fahrenheit</option>
    <option value="reamur">Reamur</option>
    <option value="kelvin">Kelvin</option>
  </select>

  <label>Pilih jenis konversi:</label>
  <select id="jenisKonversi">
    <option value="celsius">Celsius</option>
    <option value="fahrenheit">Fahrenheit</option>
    <option value="reamur">Reamur</option>
    <option value="kelvin">Kelvin</option>
  </select>

  <button onclick="konversiSuhu()">Konversi</button>

  <br>
  <p id="hasilKonversi"></p>
  <p id="caraKonversi"></p>

  <script src="JS/suhu.js"></script>
</body>
</html>
