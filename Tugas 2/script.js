document.getElementById("bil1").value;
document.getElementById("bil2").value;

function tambah(bil1,bil2){
    var bil1 = document.getElementById("bil1").value;
    var bil2 = document.getElementById("bil2").value;
    var hasil = parseInt(bil1) + parseInt(bil2);
    document.getElementById("hasil").innerHTML = hasil;
    alert(hasil);
    }

function kurang(bil1,bil2){
    var bil1 = document.getElementById("bil1").value;
    var bil2 = document.getElementById("bil2").value;
    var hasil = parseInt(bil1) - parseInt(bil2);
    document.getElementById("hasil").innerHTML = hasil;
    alert(hasil);
    }

function kali(bil1,bil2){
    var bil1 = document.getElementById("bil1").value;
    var bil2 = document.getElementById("bil2").value;
    var hasil = parseInt(bil1) * parseInt(bil2);
    document.getElementById("hasil").innerHTML = hasil;
    alert(hasil);
    }

function bagi(bil1,bil2){
    var bil1 = document.getElementById("bil1").value;
    var bil2 = document.getElementById("bil2").value;
    var hasil = parseInt(bil1) / parseInt(bil2);
    document.getElementById("hasil").innerHTML = hasil;
    alert(hasil);
    }
