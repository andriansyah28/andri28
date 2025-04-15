// script.js
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
  
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  });
  
  function openPdf(fileName) {
    const win = window.open(fileName, '_blank');
    if (win) {
      win.focus();
    } else {
      alert('Silakan izinkan pop-up di browser Anda.');
    }
  }
  