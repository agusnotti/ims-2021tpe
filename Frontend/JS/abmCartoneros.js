const urlBase = "http://localhost/api";
const urlCartoneros = "/cartoneros";

let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let documento= document.getElementById('documento');
let direccion = document.getElementById('direccion');
let fechaNacimiento = document.getElementById('dob');
let vehiculo = document.getElementById('vehiculo');
let capacidad = document.getElementById('capacidad');
let btnAgregarCartonero = document.getElementById('btn-agregar-cartonero');

let btnCancelar = document.getElementById('btn-cancelar');
let btnAgregar = document.getElementById('btn-agregar');
let btnEditar = document.getElementById('btn-editar');

btnAgregar.addEventListener("click", agregarCartonero);
btnAgregarCartonero.addEventListener("click", ()=>{
    btnEditar.hidden = true;
})

function agregarCartonero(event) {
    event.preventDefault();
  
    let cartonero = {
      nombre: nombre.value,
      apellido: apellido.value,
      dni: documento.value,
      direccion: direccion.value,
      dob: dob.value,
      vehiculo: vehiculo.value,
      capacidad: capacidad.value
    };
  
    fetch(urlBase + urlCartoneros, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartonero),
    })
      .then((response) => {
        if (!response.ok) {
        } else {
          return response.json();
        }
      })
      .then((json) => {
        location.reload();
      })
      .catch((error) => console.log(error));
  }
  