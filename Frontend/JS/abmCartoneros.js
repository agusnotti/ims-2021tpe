const urlBase = "http://localhost/api";
const urlCartoneros = "/cartoneros";

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let documento = document.getElementById("documento");
let direccion = document.getElementById("direccion");
let fechaNacimiento = document.getElementById("dob");
let vehiculo = document.getElementById("vehiculo");
let capacidad = document.getElementById("capacidad");
let btnAgregarCartonero = document.getElementById("btn-agregar-cartonero");

let btnCancelar = document.getElementById("btn-cancelar");
let btnAgregar = document.getElementById("btn-agregar");
let btnEditar = document.getElementById("btn-editar");

let btnEliminarCartonero = document.getElementById("btn-eliminar-cartonero");

let table = document.getElementById("body-tabla");

btnAgregar.addEventListener("click", agregarCartonero);
btnAgregarCartonero.addEventListener("click", () => {
  btnEditar.hidden = true;
});

btnCancelar.addEventListener('click', cancelarEditar)

function cancelarEditar(event) {
  event.preventDefault();

  btnEditar.hidden = true;
  btnCancelar.hidden = true;
  btnAgregar.hidden = false;

  nombre.value = "";
  apellido.value = "";
  documento.value = "";
  direccion.value = "";
  fechaNacimiento.value = "";
  vehiculo.value = "";
  capacidad.value = "";
}

function agregarCartonero(event) {
  event.preventDefault();

  let cartonero = {
    nombre: nombre.value,
    apellido: apellido.value,
    dni: documento.value,
    direccion: direccion.value,
    dob: dob.value,
    vehiculo: vehiculo.value,
    capacidad: capacidad.value,
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

getCartoneros();

function getCartoneros() {
  fetch(urlBase + urlCartoneros, {})
    .then((response) => {
      if (!response.ok) {
        //showError("No se pudieron obtener los materiales");
      } else {
        return response.json();
      }
    })
    .then((json) => {
      renderTable(json);
    })
    .catch((error) => console.log(error));
}

function renderTable(cartoneros) {
  cartoneros.forEach((cartonero) => {
    renderRow(cartonero);
  });
}

function renderRow(cartonero) {
  let id = cartonero.id;
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");
  let td8 = document.createElement("td");

  let btnEliminar = document.createElement("button");
  let btnEditar = document.createElement("button");

  btnEliminar.addEventListener("click", function () {
    renderizarEliminarCartonero(id);
  });

  btnEditar.addEventListener("click", function () {
    renderEditarCartonero(cartonero);
  });

  td1.innerText = cartonero.nombre;
  td2.innerText = cartonero.apellido;
  td3.innerText = cartonero.dni;
  td4.innerText = cartonero.direccion;
  td5.innerText = cartonero.dob;
  td6.innerText = cartonero.vehiculo;
  td7.innerText = cartonero.capacidad;

  td1.classList.add("text-justify");
  td2.classList.add("text-justify");
  td3.classList.add("text-justify");
  td4.classList.add("text-justify");
  td5.classList.add("text-justify");
  td6.classList.add("text-justify");
  td7.classList.add("text-justify");
  td8.classList.add("text-justify");

  tr.id = id;

  btnEliminar.innerHTML = '<i class="far fa-trash-alt"></i>';
  btnEditar.innerHTML = '<i class="fas fa-edit"></i>';
  btnEliminar.classList.add("btn-tabla-borrar");
  btnEditar.classList.add("btn-tabla-editar");
  btnEditar.setAttribute("data-bs-toggle", "modal");
  btnEditar.setAttribute("data-bs-target", "#myModal");
  btnEliminar.setAttribute("data-bs-toggle", "modal");
  btnEliminar.setAttribute("data-bs-target", "#myModalEliminar");

  td8.classList.add("btn-actions");
  td8.appendChild(btnEliminar);
  td8.appendChild(btnEditar);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tr.appendChild(td8);

  table.appendChild(tr);
}

function editarCartonero(event) {
  event.preventDefault();

  let cartonero = {
    nombre: nombre.value,
    apellido: apellido.value,
    dni: documento.value,
    direccion: direccion.value,
    dob: fechaNacimiento.value,
    vehiculo: vehiculo.value,
    capacidad: capacidad.value,
  };

  fetch(urlBase + urlCartoneros + "/" + btnEditar.dataset.idCartonero, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartonero),
  })
    .then((response) => {
      if (!response.ok) {
        //showError("ERROR AL AGREGAR M");
      } else {
        return response.json();
      }
    })
    .then((json) => {
      location.reload();
    })
    .catch((error) => console.log(error));
}

function renderizarEliminarCartonero(id) {
  btnEliminarCartonero.dataset.idCartonero = id;
  btnEliminarCartonero.addEventListener("click", borrarCartonero);
}

function renderEditarCartonero(cartonero) {
  nombre.value = cartonero.nombre;
  apellido.value = cartonero.apellido;
  documento.value = cartonero.dni;
  direccion.value = cartonero.direccion;
  fechaNacimiento.value = cartonero.dob;
  vehiculo.value = cartonero.vehiculo;
  capacidad.value = cartonero.capacidad;

  btnEditar.dataset.idCartonero = cartonero.id;
  btnEditar.addEventListener("click", editarCartonero);
  btnEditar.hidden = false;
  btnCancelar.hidden = false;
  btnAgregar.hidden = true;
}

function borrarCartonero(event) {
  fetch(
    urlBase + urlCartoneros + "/" + btnEliminarCartonero.dataset.idCartonero,
    {
      method: "DELETE",
    }
  )
    .then(function (response) {
      if (!response.ok) {
        //showError("ERROR AL BORRAR");
      }
    })
    .then(function () {
      //document.getElementById(id).remove();
      location.reload();
    })
    .catch((error) => console.log(error));
}
