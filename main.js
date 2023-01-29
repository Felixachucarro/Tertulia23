
// window.onload = function () {  
//     $('#carga').fadeOut();

//     $('body').removeClass('gif');
    
// }

// window.alert('Esta página aún esta en construcción, es probable que haya algúnos links caidos o cosas por resolver');   


// Muestra la pantalla de carga
function showLoader() {
    document.getElementById("carga").style.display = "block";
    document.body.style.overflow = "hidden";
  }
  
  // Oculta la pantalla de carga
  function hideLoader() {
    document.getElementById("carga").style.display = "none";
    document.body.style.overflow = "auto";
  }
  
  // Muestra la pantalla de carga al cargar la página
  window.onload = showLoader;
  
  // Oculta la pantalla de carga cuando la página esté cargada
  window.onload = hideLoader;