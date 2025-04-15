document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav').classList.toggle('active');
  });
  
  function openPdf(fileName) {
    window.open(fileName, '_blank');
  }
  