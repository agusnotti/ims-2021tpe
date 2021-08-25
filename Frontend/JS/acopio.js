const urlBase = "http://localhost/api";
const urlAcopios = "/acopios";


let table = document.getElementById("body-tabla");
let options = document.getElementById("option-acopio");

document.getElementById('consulta-all').addEventListener('click', ()=> getAcopios());

getAcopios();
getOptionAcopio();
addEvent();

function getOptionAcopio(){

    fetch(urlBase + "/cartoneros", {})
    .then((response) => {
      if (!response.ok) {
        //showError("No se pudieron obtener los materiales");
      } else {
        return response.json();
      }
    })
    .then((json) => {
       // console.log(json)
        
       renderOption(json);

    })
    .catch((error) => console.log(error));
}

  
function renderOption(options) {
    options.forEach((op) => {
        let id = op.id;
        let option = `<option value=${id} class="option-acopio">`+ op.nombre+`</option>`
        document.getElementById('options-cartonero').innerHTML += option;
    })   
}



function addEvent(){
    let btnConsult = document.getElementById('consulta-acopio');
    let optionAcopio = document.getElementById('options-cartonero');
    btnConsult.addEventListener('click', () => getAcopiosByCartonero(optionAcopio.value));

}


function getAcopios() {
  table.innerHTML = '';
  fetch(urlBase + urlAcopios, {})
    .then((response) => {
      if (!response.ok) {
        //showError("No se pudieron obtener los materiales");
      } else {
        return response.json();
      }
    })
    .then((json) => {
        //console.log(json)
        
      renderTable(json);

    })
    .catch((error) => console.log(error));
}

function renderTable(acopios) {
  acopios.forEach((acopio) => {
    renderRow(acopio);
  });
}

function renderRow(acopio) {
  let id = acopio.id;
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");



  td1.innerText = acopio.nombre;
  td2.innerText = acopio.apellido;
  td3.innerText = acopio.dni;
  td4.innerText = acopio.material;
  td5.innerText = acopio.total;
 

  td1.classList.add("text-justify");
  td2.classList.add("text-justify");
  td3.classList.add("text-justify");
  td4.classList.add("text-justify");
  td5.classList.add("text-justify");


  tr.id = id;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);


  table.appendChild(tr);
}



function getAcopiosByCartonero(id) {
    table.innerHTML = '';
    fetch(urlBase + urlAcopios + "/" + id, {})
      .then((response) => {
        if (!response.ok) {
          //showError("No se pudieron obtener los materiales");
        } else {
          return response.json();
        }
      })
      .then((json) => {
        console.log(json)
        
        renderTable(json);
  
      })
      .catch((error) => console.log(error));
  }
  

  
