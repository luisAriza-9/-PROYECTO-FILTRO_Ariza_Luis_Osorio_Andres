import { post } from "../models/post.js"; //AGREGAR
import { Verificar, get ,devolverinfo} from "../models/get.js"; //OBTENER
import { put } from "../models/put.js"  //ACTUALIZAR
import { delet } from "../models/delete.js"; //BORRAR
import {idProducto} from "../views/servicios.js"


export async function controlador(formu, event, entidad, elemformu) {
  const URL = "http://localhost:4000/";
  let url = "";
  
  const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null;
  const value = event.target.value;

  switch (value) {
    case "Registrarse":
      url = URL + entidad;
      console.log(datos)
      Verificar(url,datos).then(dt => {
          console.log(dt)
          if(dt!= true){
          post(url, datos);
          }
          window.location.href = `http://127.0.0.1:5504/Proyecto/json-server-example/html/servicios.html`
      })
      break;
    case "CARGARSELECT":
    case "Buscar":
      url = `${URL}${entidad}/${datos !== null ? datos.id : ""}`;
      let data = get(url, formu)        // Utilizar los datos obtenidos
      console.log(data)
      ;
      break;
    case "Modificar":
      url = URL + entidad + `/${datos.id}`;
      put(url, datos);
      //formu.reset
      break;
    case "Borrar":
      url = URL + entidad + `/${datos.id}`;
      delet(url);
      formu.reset;
      break;
    case "Iniciar Sesión":
      url = URL + entidad + `/?Correo=${datos.Correo}`;
      get(url,datos).then(dt => {
        formu.reset
        localStorage.setItem("user",JSON.stringify(dt[0]))
        localStorage.setItem("estado","activo")
        window.location.href = `http://127.0.0.1:5504/Proyecto/json-server-example/html/servicios.html?user=${dt[0].NombreUser} + " " + ${dt[0].ApellidoUser}`;      
      });
      break;
    case "Adquirir":
      let cont = localStorage.getItem("contadorCarrito")
      if(!localStorage.getItem("estado")){
        alert("Inicia Sesion")
        localStorage.setItem("carrito",0)
      }else{
        let dat = JSON.parse(localStorage.getItem("user"))
        let idprod = idProducto(event)
        url = URL + entidad[0] + `/?productoId=${idprod}&&UserId=${dat.id}`;
        devolverinfo(url).then(dt=>{
          console.log(dt)
            if(dt==""){
              cont++
              localStorage.setItem("contadorCarrito",cont)
              let datos = {
                productoId: idprod,
                UserId:dat.id,
                CantidadProducto:1
              }
              console.log(datos)
              post(url,datos)
            }else
            if(dt!=""){
              cont++
              localStorage.setItem("contadorCarrito",cont)
              url = URL + entidad[0] + `/${dt[0].id}`
              console.log(dt.CantidadProducto)
              let datos={
                id: dt[0].id,
                productoId: idprod,
                UserId:dat.id,
                CantidadProducto: dt[0].CantidadProducto + 1
              }
              console.log(datos)
              put(url,datos)
            }
        })
      }
      // url = URL + entidad +${datos}`;
     
    break;
  }
}