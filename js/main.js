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
function corazon(dato){
    console.log("Dato recibido:", dato);
    switch(dato){
        case 1:
            document.getElementById('corazon_abierto').style.display = 'none';
            document.getElementById('corazon_cerrado').style.display = 'block';
        break;
        case 2:
            document.getElementById('corazon_abierto2').style.display = 'none';
            document.getElementById('corazon_cerrado2').style.display = 'block';
        break;
        case 3:
            document.getElementById('corazon_abierto3').style.display = 'none';
            document.getElementById('corazon_cerrado3').style.display = 'block';
        break;
    }
    
}
function corazon2(dato2){
    console.log("Dato recibido corazon:", dato2);
    switch (dato2){
        case 1:
            document.getElementById('corazon_abierto').style.display = 'block';
            document.getElementById('corazon_cerrado').style.display = 'none';
        break;
        case 2:
            document.getElementById('corazon_abierto2').style.display = 'block';
            document.getElementById('corazon_cerrado2').style.display = 'none';
        break;
        case 3:
            document.getElementById('corazon_abierto3').style.display = 'block';
            document.getElementById('corazon_cerrado3').style.display = 'none';
        break;
    }
    
}
function ver(dato3){
    switch(dato3){
        case 1:
            window.open("https://josue2023.neocities.org/netflix/", "_blank");
        break; 
        case 2:
            window.open("https://guatemaladigital.com/", "_blank");
        break; 
    }
    
}


var imgContainer = document.getElementById("imgContainer");

  // Función para cambiar la imagen cuando el tamaño de la ventana cambia
  function cambiarImagen() {
    var img = imgContainer.querySelector("img");
    var imgContainer2 = document.getElementById("imgContainer2");
    var img2 = imgContainer2.querySelector("img");

    // Obtener el ancho del contenedor
    var containerWidth = imgContainer.offsetWidth;
    var containerWidth2 = imgContainer2.offsetWidth;

    // URL de la imagen alternativa
    var nuevaImagenURL = (containerWidth <= 600) ? "../img/code 2.jpg" : "img/code.jpg";
    var nuevaImagenURL2 = (containerWidth2 <= 767) ? "../img/GD Logo 3.png" : "img/GD Logo 2.png";
    var nuevaImagenURL4 = (containerWidth2 <= 991) ? "../img/GD Logo 5.png" : "img/GD Logo 2.png";
    var nuevaImagenURL3 = (containerWidth2 <= 1199) ? "../img/GD Logo 4.png" : "img/GD Logo 2.png";

    // Cambiar la fuente de la imagen
    img.src = nuevaImagenURL;
    img2.src = nuevaImagenURL2;
    img2.src = nuevaImagenURL2;
    img2.src = nuevaImagenURL3;
    img2.src = nuevaImagenURL4;
  }
   // Ejecutar la función cuando se carga la página y cuando cambia el tamaño de la ventana
   window.addEventListener("load", cambiarImagen);
   window.addEventListener("resize", cambiarImagen);
