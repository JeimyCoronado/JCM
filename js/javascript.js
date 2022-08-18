// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-y32lZxhNKYGJa1BJq9I6M1I9mEHezBA",
  authDomain: "grupo-jcm.firebaseapp.com",
  projectId: "grupo-jcm",
  storageBucket: "grupo-jcm.appspot.com",
  messagingSenderId: "848333521063",
  appId: "1:848333521063:web:a86676b182e9cb21051b82",
  measurementId: "G-P205K15QJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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