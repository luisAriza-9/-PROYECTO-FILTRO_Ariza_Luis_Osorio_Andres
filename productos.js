



	function hamburguer() {
		  let info = document.getElementById('menu');
		  info.style.display = (info.style.display === 'none') ? 'flex' : 'none';
		  const agglist = document.getElementById('')
		  const p = document.getElementById('menu')
		  
	
		}
	const numero2 = document.getElementById('N2').value
	const anterior = document.getElementsByClassName('vender')
	const siguiente = document.getElementsByClassName('vender2')
	numero2.addEventListener('click',()=>{
		anterior.style.display = (anterior.style.display === 'none') ? 'block' : 'none';
		siguiente.style.display = (siguiente.style.display === 'none') ? 'flex' : 'none';
	
	})
	
	const inicioSecion = document.getElementById('botonInicio')
	
	inicioSecion.addEventListener('mouseover',cambiarcolor)
	inicioSecion.addEventListener('mouseout',cambiarcolor2)
	
	///
	const desplegarInicio = document.getElementById('CartelInicioSecion');
	
	function AbrirInicio() {
	desplegarInicio.style.display = (desplegarInicio.style.display === 'none') ? 'flex' : 'none';
	}
	
	const inicio = document.getElementById('botonInicio');
	inicio.addEventListener('click', AbrirInicio);
	
	function cambiarcolor(){
			inicioSecion.style.filter = 'invert(0)'
			inicioSecion.style.width = '80px'
			inicioSecion.style.height = '40px'
			inicioSecion.textContent= 'iniciar secion'
			inicioSecion.style.transition = '0.5s ease-out'
			inicioSecion.style.backgroundColor = 'black'
			inicioSecion.style.color = 'white'
			
		   
	
			
		}
		function cambiarcolor2(){
			inicioSecion.style.filter = 'invert(0)'
			 inicioSecion.style.width = ''
			inicioSecion.style.height = ''
			inicioSecion.innerHTML= '&#128100'
			inicioSecion.style.transition = '0.5s ease-out'
		 
			
	
		}
		const URL_BASE = 'http://localhost:3000';
	const USUARIOS_ENDPOINT = '/usuarios';
	const CARRITO_ENDPOINT = '/carrito';
	
	document.addEventListener("DOMContentLoaded", function () {
	
	  const usuarioGuardado = JSON.parse(sessionStorage.getItem('usuario'));
	  if (usuarioGuardado) {
		alert(`¡Bienvenido de nuevo, ${usuarioGuardado.nombre}!`);
		const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || { total: 0 };
		totalCarrito = carritoGuardado.total;
		carritoTotal.textContent = totalCarrito;
	  }
	});
	
	
	function iniciarSesion() {
	  const username = document.getElementById('inputIngresar').value;
	  const password = document.getElementById('Inputcontraseña').value;
	
	  fetch(`${URL_BASE}${USUARIOS_ENDPOINT}?nombre=${username}&contraseña=${password}`)
		.then(respuesta => respuesta.json())
		.then(usuarios => {
		  if (usuarios.length > 0) {
			const usuario = usuarios[0];
			alert(`¡Bienvenido, ${username}!`);
			sessionStorage.setItem('usuario', JSON.stringify(usuario));
			const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || { total: 0 };
			totalCarrito = carritoGuardado.total;
			carritoTotal.textContent = totalCarrito;
		  } else {
			alert('Credenciales incorrectas. Intenta de nuevo o regístrate.');
		  }
		})
		.catch(error => console.error('Error al iniciar sesión:', error));
	}
		
	
	
	
	  function registrarUsuario() {
	  const newUsername = document.getElementById('inputRegistrar').value;
	  const newPassword = document.getElementById('InputcontraseñaR').value;
	
	  fetch(`${URL_BASE}${USUARIOS_ENDPOINT}?nombre=${newUsername}`)
		.then(respuesta => respuesta.json())
		.then(usuarios => {
		  if (usuarios.length > 0) {
			alert('Este nombre de usuario ya está registrado. Por favor, elige otro.');
		  } else {
			fetch(`${URL_BASE}${USUARIOS_ENDPOINT}`, {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({ nombre: newUsername, contraseña: newPassword }),
			})
			  .then(respuesta => respuesta.json())
			  .then(usuarioRegistrado => {
				return fetch(`${URL_BASE}${USUARIOS_ENDPOINT}/${usuarioRegistrado.id}`);
			  })
			  .then(respuesta => respuesta.json())
			  .then(usuario => {
				alert(`Usuario ${newUsername} registrado con éxito. ¡Ahora puedes iniciar sesión!`);
			  })
			  .catch(error => console.error('Error al registrar usuario:', error));
		  }
		})
		.catch(error => console.error('Error al verificar existencia del usuario:', error));
	}
	
		const ValidarRegistro = document.getElementById('RegistrarUS')
		ValidarRegistro.addEventListener('click',registrarUsuario)
	
	
		const CartelR = document.getElementById('contenedorRegistro')
	
		const loginUsername = document.getElementById('inputIngresar').value;
		const loginPassword = document.getElementById('Inputcontraseña').value;
		
	
		function RegistrarCartel() {
		CartelR.style.display = (CartelR.style.display === 'none') ? 'flex' : 'none';
		CerrarInicio.style.display = (CerrarInicio.style.display === 'none') ? 'flex' : 'none';
		if(loginUsername=='' && loginPassword == ''){
		 CerrarInicio.style.display = (CerrarInicio.style.display === 'none') ? 'flex' : 'none'
		}
		}
	   const registrarBoton = document.getElementById('registrarse');
	   registrarBoton.addEventListener('click',RegistrarCartel);
		
	
	   
	   function CerrarR() {
		CartelR.style.display = (CartelR.style.display === 'none') ? 'flex' : 'none';
	}
		
	
		const cerrarRegistro = document.getElementById('cerrarInicioR')
		cerrarRegistro.addEventListener('click', CerrarR);
	
		const botonEntendido = document.getElementById('Entendido')
		botonEntendido.addEventListener('click',()=>{
			const InicioExitoso = document.getElementById('InicioCorrecto')
			InicioExitoso.style.display = (InicioExitoso.style.display === 'none') ? 'flex' : 'none'; 
		})
	  

	

































































 






 




 
 
 
 
 
 t__2023-1/proyecto/ima
 

 
 
 

