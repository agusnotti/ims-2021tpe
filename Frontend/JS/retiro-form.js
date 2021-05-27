
let main = document.querySelector("#formulario")

let response = await fetch('./js/retiro-form.html');
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
} else {
  let mytext = await response.text();

  main.innerHTML = mytext
}


document.querySelector('#photoFile').onchange = function () {
  loadFile(event)
};


document.querySelector('#photo').addEventListener("click", () => {
  document.querySelector("#photoFile").click()

})

const loadFile = function (event) {
  const output = document.querySelector('#img');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src)
  }
};

document.querySelector('#inscription').addEventListener("click", () => {

  let data = {
    "nombre": document.querySelector("#retiro-name").value,
    "apellido": document.querySelector("#retiro-lastname").value,
    "direccion": document.querySelector("#retiro-address").value,
    "telefono": document.querySelector("#retiro-phone").value,
    "franja_horaria": document.querySelector("#retiro-franja").value,
    "volumen_materiales": document.querySelector("#retiro-volumen").value,
    "foto": null
  }

  postTransaction(JSON.stringify(data));

})

async function postTransaction(data) {

  let response = await fetch('http://localhost/api/retiros', {
    method: 'POST',
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (!response.ok) {
    responseError()
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let mytext = await response.text();
    console.log(mytext)
    if(mytext.includes("El Retiro fue agregado con exito"))
    {
      responseOk()
    }
    else{
      responseError(mytext)
    }
    
  
  }
}



const alertDiv = document.querySelector("#alerts")


async function responseOk() {


  let response = await fetch('./js/retiro-alert-ok.html');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let mytext = await response.text();

    alertDiv.innerHTML = mytext
  }
  setTimeout(function () {
    var myAlert = document.querySelector('.alert')
    var bsAlert = new bootstrap.Alert(myAlert)
    bsAlert.close()
  }, 3000);
}



async function responseError(error) {
  let response = await fetch('./js/retiro-alert-danger.html');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let mytext = await response.text();

    alertDiv.innerHTML = mytext.replace("{{error}}",error)
  }

  setTimeout(function () {
    var myAlert = document.querySelector('.alert')
    var bsAlert = new bootstrap.Alert(myAlert)
    bsAlert.close()
  }, 3000);

}
