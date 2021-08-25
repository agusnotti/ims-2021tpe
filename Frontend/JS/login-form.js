
let main = document.querySelector("#login")

let response = await fetch('./js/login-form.html');
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
} else {
  let mytext = await response.text();

  main.innerHTML = mytext
}



document.querySelector('#btn-login').addEventListener("click", () => {

    let data = {
        "user": document.querySelector("#user").value,
        "password": document.querySelector("#pass").value,
    }

  postUser(JSON.stringify(data));

})

async function postUser(data) {

  let userCheck = document.querySelector("#user").value;

  let response = await fetch('http://localhost/api/login', {
    method: 'POST',
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  })
  
  if (!response.ok) {
   
  }else {

        let mytext = await response.text();
        if(mytext.includes('Usuario Loggeado correctamente')){

            sessionStorage.setItem("user",userCheck);
            window.location = './Pages/admin.html';
        }
      

    }

    /*
    let data = fetch('http://localhost/api/session')
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        return data;
    })
    .catch(error => {
        return error;
    });
    */
    

}




const alertDiv = document.querySelector("#alerts")



async function responseError(error) {
  
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
