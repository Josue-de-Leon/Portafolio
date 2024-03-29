const $ini = document.getElementById("ini");
$ini.style.borderBottom="2px solid orange";

function inicio() {
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('information').style.display = 'none';
    document.getElementById('proyect').style.display = 'none';
    document.getElementById('certficados').style.display = 'none';


    const $ini = document.getElementById("ini");
    const $info = document.getElementById("info");
    const $project = document.getElementById("project");
    const $certi = document.getElementById("certi");

    console.log($info);
    $info.style.border="none";
    $ini.style.borderBottom="2px solid orange";
    $project.style.border="none";
    $certi.style.border="none";
}

function informacion1() {
        
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('information').style.display = 'block';
    document.getElementById('proyect').style.display = 'none';
    document.getElementById('certficados').style.display = 'none';

    const $ini = document.getElementById("ini");
    const $info = document.getElementById("info");
    const $project = document.getElementById("project");
    const $certi = document.getElementById("certi");

    console.log($info);
    $info.style.borderBottom="2px solid orange";
    $ini.style.border="none";
    $project.style.border="none";
    $certi.style.border="none";    
}

function proyectos() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('information').style.display = 'none';
    document.getElementById('proyect').style.display = 'block';
    document.getElementById('certficados').style.display = 'none';

    const $ini = document.getElementById("ini");
    const $info = document.getElementById("info");
    const $project = document.getElementById("project");
    const $certi = document.getElementById("certi");

    console.log($info);
    $ini.style.border="none";
    $info.style.border="none";
    $certi.style.border="none";
    $project.style.borderBottom="2px solid orange";
}

function certificar() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('information').style.display = 'none';
    document.getElementById('proyect').style.display = 'none';
    document.getElementById('certficados').style.display = 'block';

    const $ini = document.getElementById("ini");
    const $info = document.getElementById("info");
    const $project = document.getElementById("project");
    const $certi = document.getElementById("certi");

    console.log($info);
    $ini.style.border="none";
    $info.style.border="none";
    $project.style.border="none";
    $certi.style.borderBottom="2px solid orange";
}
function corazon(){
    document.getElementById('corazon1').style.display = 'none';
    document.getElementById('corazon2').style.display = 'block';
}
function corazon2(){
    document.getElementById('corazon1').style.display = 'block';
    document.getElementById('corazon2').style.display = 'none';
}


var imgContainer = document.getElementById("imgContainer");

  // Función para cambiar la imagen cuando el tamaño de la ventana cambia
  function cambiarImagen() {
    var img = imgContainer.querySelector("img");

    // Obtener el ancho del contenedor
    var containerWidth = imgContainer.offsetWidth;

    // URL de la imagen alternativa
    var nuevaImagenURL = (containerWidth <= 600) ? "../img/code 2.jpg" : "img/code.jpg";

    // Cambiar la fuente de la imagen
    img.src = nuevaImagenURL;
  }
   // Ejecutar la función cuando se carga la página y cuando cambia el tamaño de la ventana
   window.addEventListener("load", cambiarImagen);
   window.addEventListener("resize", cambiarImagen);
