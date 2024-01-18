import { controlador } from "../controllers/controlador.js";


let entidades = ["carrito","producto"]

const formu = document.querySelector("form");
formu.addEventListener("click", (e) => {
  e.preventDefault();
  controlador(formu, e, entidades);
  e.stopPropagation();
});

 export function idProducto(e){
    if(e.target.id=="btn1"){
      return "1"
    }
    else if(e.target.id=="btn2"){
        return "2"
    }
}