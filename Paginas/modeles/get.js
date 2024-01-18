export async function get(url, datos) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        }
      });
      let  dt = await response.json();
      if(datos.Correo==dt[0].Correo && datos.Contraseña==dt[0].Contraseña){
          alert("inicio sesion Satisfactorio")
          return dt
        }else{
          alert("Valores Incorrectos")
        }
      
    } catch (error) {
      console.error("Error:", error);
      alert("Valores Incorrectos")
      return null
    }
  }

  export async function devolverinfo(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        }
      });
      let  dt = await response.json();
      return dt
    } catch (error) {
      console.error("Error:", error);
      return null
    }
  }
  
  
  
export async function Verificar(url, datos) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      }
    });
    let  dt = await response.json();
    if(datos.Correo==dt[0].Correo){
        alert("Error - El usuario existe")
        return true
    }
    alert("Registrado Exitosamente")
    return false
  } catch (error) {
    console.error("Error:", error);
    return null
  }
}