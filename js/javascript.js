(() => {
    const btnHome = document.querySelector("[data-btn-home]");
    const btnNosotros = document.querySelector("[data-btn-nosotros]");
    const divHome = document.querySelector("[data-home]");
    const divNosotros = document.querySelector("[data-nosotros]");

    const seleccionarHome = (event) => {
        const boton = event.target;
        if(boton == btnHome) {
            btnHome.classList.add("head-enlace-btn-seleccionado"); 
            divHome.classList.remove("ocultar");
            btnNosotros.classList.remove("head-enlace-btn-seleccionado");
            divNosotros.classList.add("ocultar");

        }else if(boton == btnNosotros) {
            btnNosotros.classList.add("head-enlace-btn-seleccionado");
            divNosotros.classList.remove("ocultar");
            btnHome.classList.remove("head-enlace-btn-seleccionado");
            divHome.classList.add("ocultar");
        }
    }

    btnHome.addEventListener("click", seleccionarHome);
    btnNosotros.addEventListener("click", seleccionarHome);
})();