
let main = document.querySelector("#pesaje")

let response = await fetch('../js/pesaje-form.html');
if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
} else {
    let mytext = await response.text();

    main.innerHTML = mytext
}

let materiales = await fetch('http://localhost/api/materiales');

if (!materiales.ok) {
    throw new Error(`HTTP error! status: ${materiales.status}`);
} else {
    let mytext = await materiales.json();

    materiales = mytext
}


let kilos = document.querySelectorAll(".kilos")
let selectors = document.querySelectorAll(".materiales")
function allCompleted() {
    if (kilos.length == 0) {
        return true;
    }
    else {
        let vacio = true;
        selectors.forEach((element) => {

            if (element.value == "") {
                vacio = false;
            }
        })
        kilos.forEach((element) => {

            if (element.value == "") {
                vacio = false;
            }
        })
        return vacio

    }



}
let lineas = document.querySelector("#lineas")



function createLine() {

    if (allCompleted()) {
        let newDiv = document.createElement("div")
        newDiv.classList.add("row")
        newDiv.classList.add("input-group")
        newDiv.classList.add("mb-2")
        newDiv.innerHTML = `

            <select class="form-select form-control materiales"  >
                <option></option>
            </select>
            <input type="number" class="form-control kilos" placeholder="Kilos">
  
        `
        lineas.append(newDiv)


        kilos.forEach((element) => {
            element.removeEventListener("focusout", createLine)

        })
        kilos = document.querySelectorAll(".kilos")
        kilos.forEach((element) => {
            element.addEventListener("focusout", createLine)

        })

        selectors.forEach((element) => {
            element.removeEventListener("focusout", createLine)

        })

        selectors = document.querySelectorAll(".materiales")

        selectors.forEach((element) => {
            element.addEventListener("focusout", createLine)

        })

        selectors.forEach(selector => {
            if (selector.querySelectorAll("option").length == 1) {
                materiales.forEach(element => {

                    let option = document.createElement("option")
                    option.setAttribute("data-value", element.id)
                    option.innerHTML = element.nombre
                    selector.append(option)


                });
            }
        })



    }

}

let dni = document.querySelector("#dni")
let completo = document.querySelector("#completo")
dni.addEventListener("change", function (e) {
    cartoneros.forEach(data => {
        if (data.dni == e.target.value) {
            completo.value = data.apellido + ", " + data.nombre
        }
    })

});


createLine()

const cartoneros = [{
    dni: 39000000,
    nombre: "Agustina",
    apellido: "Notti"

}, {
    dni: 37000000,
    nombre: "Pablo",
    apellido: "Cutropia"
}
    , {
    dni: 35000000,
    nombre: "Geronimo",
    apellido: "Anselmo"
}]

const btnInscripcion = document.querySelector("#inscription");
btnInscripcion.addEventListener("click", sendMateriales)

function sendMateriales() {

    let lineasAEnviar = [];
    let lineasNode = lineas.querySelectorAll("div")

    lineasNode.forEach(element => {

        let select = element.querySelector("select")

        let materialId = select.querySelectorAll("option")[select.selectedIndex].getAttribute("data-value");
        let kilos = element.querySelector("input")

        if (kilos.value.length != 0 && materialId != null) {
            let data = {

                material: materialId,
                cartonero: null,
                kilos: kilos.value
            }
            lineasAEnviar.push(data)
        }



    })

    lineasAEnviar.forEach(async (e) => {
        console.log(JSON.stringify(e))
        let response = await fetch('http://localhost/api/pesajes', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(e)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            let mytext = await response.text();

            console.log(mytext)
        }
    })
}