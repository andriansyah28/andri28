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

  document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Frontend Developer", "UI Designer", "Web Enthusiast"];
    const typewriter = document.querySelector(".typewriter");
  
    let i = 0; 
    let j = 0; 
    let isDeleting = false;
  
    function type() {
      const current = texts[i];
      const partial = current.substring(0, j);
      typewriter.textContent = partial;
  
      if (!isDeleting && j < current.length) {
        j++;
        setTimeout(type, 100); 
      } else if (isDeleting && j > 0) {
        j--;
        setTimeout(type, 50); 
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          i = (i + 1) % texts.length; 
        }
        setTimeout(type, 1500); 
      }
    }
  
    type();
  });
  
  