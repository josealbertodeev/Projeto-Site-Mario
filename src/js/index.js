const formulario = document.querySelector(".formulario");
const mascaraFormulario = document.querySelector(".mascara-formulario");

function mostrarFormulario(){
    formulario.style.left = "50%";
    formulario.style.transform = "translate(-50%)";
    mascaraFormulario.style.display = "block";
}

function esconderFormulario(){
    formulario.style.left = "-300px";
    mascaraFormulario.style.display = "none";
}