export function delet(url, objeto) {
    fetch(url, {
      method: "DELETE"
    })
    .then((response)=>response.json())
    .then((json)=> console.log(json))
    .catch((error)=>console.error("error"+ error))
  }