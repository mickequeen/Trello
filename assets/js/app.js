
//variables globales para funciones

/*crear variable para contenido de input*/
var list= document.getElementById('list')
/*crear variable contenido de container*/
var container= document.getElementById('container');
/*crear variable botonera*/
var buttons=document.getElementById('buttons');
//rescatar boton guardar
var save= document.getElementById('save');

list.addEventListener('click', function(){
	container.classList.toggle('graybackground');
	buttons.classList.toggle('mostrar');
})