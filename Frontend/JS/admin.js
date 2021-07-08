document.addEventListener("DOMContentLoaded", function () {


  const urlBase = "http://localhost/api";
  const urlMateriales = "/materiales";
  let table = document.getElementById("body-tabla");
  let btnAgregar = document.getElementById("btn-agregar");
  let btnEditar = document.getElementById("btn-editar");
  let btnCancelar = document.getElementById("btn-cancelar");
  let tipoMaterial = document.getElementById("tipo-material");
  let descripcion = document.getElementById("descripcion");
  let reqEntrega = document.getElementById("req-entrega");
  let imagen = document.getElementById("imagen");
  let btnAgregarMateriales = document.getElementById("btn-agregar-materiales");
  let btnEliminarMaterial = document.getElementById("btn-eliminar-material");

  let tituloForm = document.getElementById('exampleModalLabel');


  let data = fetch('http://localhost/api/session')
  .then((response) => response.json())
  .then(data => {
      console.log(data)
      return data;
  })
  .catch(error => {
      return error;
  });



  btnAgregar.addEventListener("click", agregarMaterial);
  btnCancelar.addEventListener("click", () => {
    tituloForm.innerHTML = "Agregar Recolector";
    cancelarEditar
  });

  btnAgregarMateriales.addEventListener("click", () => {
    btnEditar.hidden = true;
  });

  getMateriales();

  function getMateriales() {
    fetch(urlBase + urlMateriales, {})
      .then((response) => {
        if (!response.ok) {
          showError("No se pudieron obtener los materiales");
        } else {
          return response.json();
        }
      })
      .then((json) => {
        renderTable(json);
      })
      .catch((error) => console.log(error));
  }

  function renderTable(materiales) {
    materiales.forEach((material) => {
      renderRow(material);
    });
  }

  function renderRow(material) {
    let id = material.id;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let btnEliminar = document.createElement("button");
    let btnEditar = document.createElement("button");

    /* btnEliminar.addEventListener("click", function () {
      borrarMaterial(id);
    }); */

    btnEliminar.addEventListener("click", function () {
      renderizarEliminarMaterial(id);
    });

    btnEditar.addEventListener("click", function () {
      tituloForm.innerHTML = "Modificar Material";
      renderEditarMaterial(material);
    });

    td1.innerText = material.nombre;
    td2.innerText = material.descripcion;
    td3.innerText = material.entrega;

    td1.classList.add("text-justify");
    /* td2.classList.add("text-justify"); */
    td3.classList.add("text-justify");
    td4.classList.add("text-justify");

    tr.id = id;

    btnEliminar.innerHTML = '<i class="far fa-trash-alt"></i>';
    btnEditar.innerHTML = '<i class="fas fa-edit"></i>';
    btnEliminar.classList.add("btn-tabla-borrar");
    btnEditar.classList.add("btn-tabla-editar");
    btnEditar.setAttribute("data-bs-toggle", "modal");
    btnEditar.setAttribute("data-bs-target", "#myModal");
    btnEliminar.setAttribute("data-bs-toggle", "modal");
    btnEliminar.setAttribute("data-bs-target", "#myModalEliminar");

    td4.classList.add("btn-actions");
    td4.appendChild(btnEliminar);
    td4.appendChild(btnEditar);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);
  }

  function agregarMaterial(event) {
    event.preventDefault();

    let material = {
      nombre: tipoMaterial.value,
      descripcion: descripcion.value,
      entrega: reqEntrega.value,
      foto: null,
    };

    fetch(urlBase + urlMateriales, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(material),
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

  function borrarMaterial(id) {
    fetch(urlBase + urlMateriales + "/" + btnEliminarMaterial.dataset.idMaterial, {
      method: "DELETE",
    })
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

  function renderizarEliminarMaterial(id){
    btnEliminarMaterial.dataset.idMaterial = id;
    btnEliminarMaterial.addEventListener("click", borrarMaterial);
  }

  function renderEditarMaterial(material) {
    tipoMaterial.value = material.nombre;
    descripcion.value = material.descripcion;
    reqEntrega.value = material.entrega;

    btnEditar.dataset.idMaterial = material.id;
    btnEditar.addEventListener("click", editarMaterial);
    btnEditar.hidden = false;
    btnCancelar.hidden = false;
    btnAgregar.hidden = true;
  }

  function cancelarEditar(event) {
    event.preventDefault();

    btnEditar.hidden = true;
    btnCancelar.hidden = true;
    btnAgregar.hidden = false;

    tipoMaterial.value = "";
    descripcion.value = "";
    reqEntrega.value = "";
  }

  function editarMaterial(event) {
    event.preventDefault();

    let material = {
      nombre: tipoMaterial.value,
      descripcion: descripcion.value,
      entrega: reqEntrega.value,
      foto: null,
    };

    fetch(urlBase + urlMateriales + "/" + btnEditar.dataset.idMaterial, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(material),
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
});
