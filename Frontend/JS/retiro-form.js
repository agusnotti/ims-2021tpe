
let main = document.querySelector("#carousel")

let response = await fetch('./js/retiro-form.html');
if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let mytext = await response.text();

    main.innerHTML = mytext
  }


  document.querySelector('#photoFile').onchange = function() {
    loadFile(event)
  };


document.querySelector('#photo').addEventListener("click",()=>{
    document.querySelector("#photoFile").click()
    
})

const loadFile = function(event) {
    const output = document.querySelector('#img');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) 
    }
  };

document.querySelector('#inscription').addEventListener("click",()=>{
   console.log("inscripto")
})