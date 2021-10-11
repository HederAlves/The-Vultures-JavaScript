const estadoParana = "Paraná";
const paranaEstado = "Paraná ";
const estadoSantaCatarina = "Santa Catarina";
const santaCatarinaEstado = "Santa Catarina ";

const entrada = document.querySelector('[data-consulta-input]');
entrada.focus();

function verifica() {

	if(entrada.value == estadoParana || entrada.value == paranaEstado) {

		window.location.href = "parana.html";

	} else { 

	if(entrada.value == estadoSantaCatarina || entrada.value == santaCatarinaEstado) {

		window.location.href = "santaCatarina.html";
					
	} else {

		window.location.href = "showIndisponivel.html";

	}


	entrada.value = "";
	entrada.focus();
				
	}
}

const button = document.querySelector('[data-consulta-button]');
button.onclick = verifica;
