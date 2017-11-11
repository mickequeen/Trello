
//variables globales para funciones

/*crear variable para contenido de input*/
var list= document.getElementById('list')
/*crear variable contenido de container*/
var container= document.getElementById('container');
/*crear variable botonera*/
var buttons=document.getElementById('buttons');
//rescatar boton guardar
var save= document.getElementById('save');
//rescatar boton cerrar
var close= document.getElementById('close');

//evento de click para abrir formulario al clickear input
list.addEventListener('click', function(){
	container.classList.add('graybackground');
	buttons.classList.remove('mostrar');
})

//evento de click para cerrar formulario al presionar boton de cruz
close.addEventListener('click', function(){
	container.classList.remove('graybackground');
	buttons.classList.add('mostrar');
})

