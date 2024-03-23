document.getElementById("iya").onclick = function() {
  document.getElementById("title").innerHTML = "Anda Berbohong";
  document.getElementById("image").src = "image 3.svg";
  document.getElementById("desc").innerHTML = "Anda adalah seorang Teknisi"
  document.getElementById("box").style.backgroundColor = "#E12E2E";
  document.getElementById("iya").style.visibility = "hidden";
  document.getElementById("tidak").style.visibility = "hidden";
};

document.getElementById("tidak").onclick = function() {
  document.getElementById("title").innerHTML = "Anda Benar";
  document.getElementById("image").src = "image 2.svg";
  document.getElementById("desc").innerHTML = "Anda adalah seorang Mahasiswa"
  document.getElementById("box").style.backgroundColor = "#6FD240";
  document.getElementById("iya").style.visibility = "hidden";
  document.getElementById("tidak").style.visibility = "hidden";
};