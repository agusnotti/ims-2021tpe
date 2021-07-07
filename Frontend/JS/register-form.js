
let main = document.querySelector("#register")

let response = await fetch('./js/register-form.html');
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
} else {
  let mytext = await response.text();

  main.innerHTML = mytext
}



document.querySelector('#registration').addEventListener("click", () => {

  let data = {
    "user": document.querySelector("#user-register").value,
    "pass": document.querySelector("#pass-register").value,
    "confirmation": document.querySelector("#confirmation").value,
  }

  postUser(JSON.stringify(data));

})

async function postUser(data) {

  let response = await fetch('http://localhost/api/register/', {
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
    if(mytext.includes("el usuario fue creado satisfactoriamente"))
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


  let response = await fetch('./js/register-alert-ok.html');
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
  let response = await fetch('./js/register-alert-danger.html');
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
