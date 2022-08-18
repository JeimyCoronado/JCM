(() => {
    const btnHome = document.querySelector("[data-btn-home]");
    const btnNosotros = document.querySelector("[data-btn-nosotros]");
    const divHome = document.querySelector("[data-home]");
    const divNosotros = document.querySelector("[data-nosotros]");
    const btnProductos = document.querySelector("[data-btn-productos]");
    const divProductos = document.querySelector("[data-productos]");
    const btnContacto = document.querySelector("[data-btn-contacto]");
    const divContacto = document.querySelector("[data-contacto]");

    const divs = [divHome, divNosotros, divProductos, divContacto];
    const btns = [btnHome, btnNosotros, btnProductos, btnContacto];

    const mostrarSeccion = (event) => {
        const boton = event.target;

        for(let i=0; i<btns.length; i++) {
            if(btns[i] == event.target) {
                btns[i].classList.add("head-enlace-btn-seleccionado");
                divs[i].classList.remove("ocultar");
            }
            else{
                btns[i].classList.remove("head-enlace-btn-seleccionado");
                divs[i].classList.add("ocultar")
            }
        }


        // divNosotros.classList.add("ocultar");
        // divHome.classList.add("ocultar");
        // divProductos.classList.add("ocultar");
        // divContacto.classList.add("ocultar");
        // btnHome.classList.remove("head-enlace-btn-seleccionado");
        // btnNosotros.classList.remove("head-enlace-btn-seleccionado");
        // btnProductos.classList.remove("head-enlace-btn-seleccionado");
        // btnContacto.classList.remove("head-enlace-btn-seleccionado");

        // if(boton == btnHome) {
        //     btnHome.classList.add("head-enlace-btn-seleccionado"); 
        //     divHome.classList.remove("ocultar");
        // }else if(boton == btnNosotros) {
        //     btnNosotros.classList.add("head-enlace-btn-seleccionado");
        //     divNosotros.classList.remove("ocultar");
        // }else if(boton == btnProductos) {
        //     btnProductos.classList.add("head-enlace-btn-seleccionado");
        //     divProductos.classList.remove("ocultar");
        // }else {
        //     btnContacto.classList.add("head-enlace-btn-seleccionado");
        //     divContacto.classList.remove("ocultar");
        // }
    }

    btnHome.addEventListener("click", mostrarSeccion);
    btnNosotros.addEventListener("click", mostrarSeccion);
    btnContacto.addEventListener("click", mostrarSeccion);
})();