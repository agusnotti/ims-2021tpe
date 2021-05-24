
let html =document.querySelector("header")
html.innerHTML =`
<header class="p-3 text-white header">
<div class="container-fluid">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="./Assets/Images/logo3.png" alt="" class="bi me-2" width="80" height="72" role="img">
        </a>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 text-white">Retirar materiales</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Materiales ¿Cómo entregarlos?</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Oferta de Transporte</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" class="form-control form-control-dark" placeholder="Buscar..."
                aria-label="Search">
        </form>

        <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Ingresar</button>
            <button type="button" class="btn btn-warning">Registrarse</button>
        </div>
    </div>
</div>
</header>

`
