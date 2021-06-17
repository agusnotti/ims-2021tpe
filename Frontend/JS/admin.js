

document.addEventListener('DOMContentLoaded', function () {
    const urlBase = "http://localhost/api";
    const urlMateriales = "/materiales";
    let table = document.getElementById('body-tabla');

    getMateriales();

    function getMateriales(){
        fetch(urlBase + urlMateriales, {})
            .then(response => {
                if (!response.ok) { 
                    showError("No se pudieron obtener los materiales"); 
                } else { 
                    return response.json();
                }
            })
            .then(json => {
                renderTable(json);
            })
            .catch(error => showError(error));
    }

    function renderTable(materiales){
        materiales.forEach(material => {
            let id = material.id;
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let btnEliminar = document.createElement("button");
            let btnEditar = document.createElement("button");

            td1.innerText = material.nombre;
            td2.innerText = material.descripcion;
            td3.innerText = material.entrega;

            td1.classList.add('text-justify');
            td2.classList.add('text-justify');
            td3.classList.add('text-justify');
            td4.classList.add('text-justify');

            tr.id = id;

            btnEliminar.innerHTML = '<i class="far fa-trash-alt"></i>';
            btnEditar.innerHTML = '<i class="fas fa-edit"></i>';
            btnEliminar.classList.add("btn-tabla-borrar");
            btnEditar.classList.add("btn-tabla-editar");
            td4.classList.add('btn-actions');
            td4.appendChild(btnEliminar);
            td4.appendChild(btnEditar);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            table.appendChild(tr);
        });
    }
});