//Kode JavaScript disini berisi fungsi-fungsi rumus untuk konversi suhu Celsius, Fahrenheit, Reamur, dan Kelvin. 
//Input variabel pada file html dimasukkan ke dalam variabel yang ada di file JavaScript untuk diproses.
//Fungsi If Else disini berfungsi untuk mengganti-ganti mana fungsi rumus yang harus digunakan, suhu apa yang harus ditampilkan, dan apa yang ditampilkan ketika input/pilihan tidak sesuai.

function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
} //Rumus Celsius ke Fahrenheit

function celsiusToReamur(celsius) {
  var reamur = celsius * 4/5;
  return reamur;
} //Rumus Celsius ke Reamur

function celsiusToKelvin(celsius) {
  var kelvin = celsius + 273;
  return kelvin; 
} //Rumus Celsius ke Kelvin

function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5/9;
  return celsius; 
} //Rumus Fahrenheit ke Celsius

function fahrenheitToReamur(fahrenheit) {
  var reamur = (fahrenheit - 32) * 4/9;
  return reamur; 
} //Rumus Fahrenheit ke Reamur

function fahrenheitToKelvin(fahrenheit) {
  var kelvin = (fahrenheit - 32) * 5/9 + 273;
  return kelvin; 
} //Rumus Fahrenheit ke Kelvin

function reamurToCelsius(reamur) {
  var celsius = reamur * 5/4;
  return celsius; 
} //Rumus Reamur ke Celsius

function reamurToFahrenheit(reamur) {
  var fahrenheit = (reamur * 9/4) + 32;
  return fahrenheit; 
} //Rumus Reamur ke Fahrenheit

function reamurToKelvin(reamur) {
  var kelvin = (reamur * 5/4) + 273;
  return kelvin; 
} //Rumus Reamur ke Kelvin

function kelvinToCelsius(kelvin) {
  var celsius = kelvin - 273;
  return celsius; 
} //Rumus Kelvin ke Celcius

function kelvinToFahrenheit(kelvin) {
  var fahrenheit = ((kelvin - 273) * 9/5) + 32;
  return fahrenheit; 
} //Rumus Kelvin ke Fahrenheit

function kelvinToReamur(kelvin) {
  var reamur = (kelvin - 273) * 4/5;
  return reamur; 
} //Rumus Kelvin ke Reamur


function konversiSuhu() {
  var inputAngka = document.getElementById("inputAngka").value;
  var angka = parseFloat(inputAngka);

  var jenisSuhu = document.getElementById("jenisSuhu").value;
  var jenisKonversi = document.getElementById("jenisKonversi").value;

  var hasilKonversi = "";
  var caraKonversi = "";

  if (jenisSuhu == "celsius") {
    if (jenisKonversi == "kelvin") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Celsius = " + celsiusToKelvin(angka) + " derajat Kelvin";
        caraKonversi = "Cara Kalkulasi : " + angka + " + " + "273" + " = " + celsiusToKelvin(angka) + " derajat Kelvin";
      }
    } else if (jenisKonversi == "fahrenheit") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Celsius = " + celsiusToFahrenheit(angka) + " derajat Fahrenheit";
        caraKonversi = "Cara Kalkulasi : " + angka + " x " + "9/5 + 32" + " = " + celsiusToFahrenheit(angka) + " derajat Fahrenheit";
      }
    } else if (jenisKonversi == "reamur") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Celsius = " + celsiusToReamur(angka) + " derajat Reamur";
        caraKonversi = "Cara Kalkulasi : " + angka + " x " + "4/5" + " = " + celsiusToReamur(angka) + " derajat Reamur";
      }
    } else {
      hasilKonversi = "Jenis konversi tidak valid.";
    }
  } 
  
  else if (jenisSuhu === "fahrenheit") {
    if (jenisKonversi === "celsius") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Fahrenheit = " + fahrenheitToCelsius(angka) + " derajat Celsius";
        caraKonversi = "Cara Kalkulasi : (" + angka + " - " + "32) x 5/9" + " = " + fahrenheitToCelsius(angka) + " derajat Celsius";
      }
    } else if (jenisKonversi === "reamur") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Fahrenheit = " + fahrenheitToReamur(angka) + " derajat Reamur";
        caraKonversi = "Cara Kalkulasi : (" + angka + " - " + "32) x 4/9" + " = " + fahrenheitToReamur(angka) + " derajat Reamur";
      }
    } else if (jenisKonversi === "kelvin") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Fahrenheit = " + fahrenheitToKelvin(angka) + " derajat Kelvin";
        caraKonversi = "Cara Kalkulasi : ((" + angka + " - " + "32) x 5/9) + 273" + " = " + fahrenheitToKelvin(angka) + " derajat Kelvin";
      }
    } else {
      hasilKonversi = "Jenis konversi tidak valid.";
    }
  } 
  
  else if (jenisSuhu === "reamur") {
    if (jenisKonversi === "celsius") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Reamur = " + reamurToCelsius(angka) + " derajat Celsius";
        caraKonversi = "Cara Kalkulasi : " + angka + " x " + "5/4" + " = " + reamurToCelsius(angka) + " derajat Celsius";
      }
    } else if (jenisKonversi === "fahrenheit") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Reamur = " + reamurToFahrenheit(angka) + " derajat Fahrenheit";
        caraKonversi = "Cara Kalkulasi : (" + angka + " x " + " x 9/4) + 32" + " = " + reamurToFahrenheit(angka) + " derajat Fahrenheit";
      }
    } else if (jenisKonversi === "kelvin") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Reamur = " + reamurToKelvin(angka) + " derajat Kelvin";
        caraKonversi = "Cara Kalkulasi : (" + angka + " x " + " x 5/4) + 273" + " = " + reamurToKelvin(angka) + " derajat Kelvin";
      }
    } else {
      hasilKonversi = "Jenis konversi tidak valid.";
    }
  } 
  
  else if (jenisSuhu === "kelvin") {
    if (jenisKonversi === "celsius") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Kelvin = " + kelvinToCelsius(angka) + " derajat Celsius";
        caraKonversi = "Cara Kalkulasi : " + angka + " - " + "273" + " = " + kelvinToCelsius(angka) + " derajat Celsius";
      }
    } else if (jenisKonversi === "fahrenheit") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Kelvin = " + kelvinToFahrenheit(angka) + " derajat Fahrenheit";
        caraKonversi = "Cara Kalkulasi : ((" + angka + " - " + "273) x 9/5) + 32" + " = " + kelvinToFahrenheit(angka) + " derajat Fahrenheit";
      }
    } else if (jenisKonversi === "reamur") {
      if (inputAngka == false) {
        hasilKonversi = "Angka tidak terisi.";
      } else {
        hasilKonversi = angka + " derajat Kelvin = " + kelvinToReamur(angka) + " derajat Reamur";
        caraKonversi = "Cara Kalkulasi : (" + angka + " - " + "273) x 4/5" + " = " + kelvinToReamur(angka) + " derajat Reamur";
      }
    } else {
      hasilKonversi = "Jenis konversi tidak valid.";
    }
  }

  else {
    hasilKonversi = "Jenis suhu tidak valid.";
  }
  
  document.getElementById("hasilKonversi").innerHTML = hasilKonversi;
  document.getElementById("caraKonversi").innerHTML = caraKonversi;
} //Fungsi Koversi Suhu
