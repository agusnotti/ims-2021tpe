document.addEventListener("DOMContentLoaded", function () {

    const extraerBtn = document.querySelector("#extraerRetiros");
    extraerBtn.addEventListener("click", function () {

        window.location.href = 'http://localhost/api/retiros/reporte';

    })
});
