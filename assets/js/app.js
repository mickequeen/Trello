
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

//variable para nuevo contenedor
var newContainer= document.getElementById('newContainer');

//evento de click para boton guardar
save.addEventListener('click', function(){
	//rescatar nombre de lista
	var listName=list.value;
	//limpiar text area
	document.getElementById('list').value="";

	//crear elementos
	var newList=document.createElement('div')
	var nameList=document.createElement('p');
	//dar atributo a elemento párrafo
	nameList.setAttribute('id', 'listTitle')
	var nameContent= document.createTextNode(listName);
	var addCard= document.createElement('a');
	//dar atributos a elementos link
	addCard.setAttribute('href', '#');
	addCard.setAttribute('id', 'add');
	var cardContent=document.createTextNode('Añadir una tarea');

	//dar hijos a padres
	nameList.appendChild(nameContent);
	addCard.appendChild(cardContent);
	//ingresar en div vacio
	newList.appendChild(nameList);
	//dar clase para que tenga misma forma y color que primer contenedor
	newList.classList.add('newBox', 'graybackground');
	//seguir dando padres a hijos
	newList.appendChild(addCard);
	newContainer.appendChild(newList);

	//añadir evento a texto de añadir tarea ( o tarjeta)
	addCard.addEventListener('click', function(){
		addCard.classList.add('mostrar')
		//crear textarea
		var newTarea= document.createElement('textarea');
		newTarea.classList.add('class', 'tarea')
		//crear boton añadir
		var addBot= document.createElement('button');
		//texto en boton
		var buttonContent=document.createTextNode('Añadir')

		//dar hijos a padres de menor a mayor
		newList.appendChild(newTarea);
		addBot.appendChild(buttonContent);
		newList.appendChild(addBot);

		//evento para añadir nombre de tarea a lista.
		addBot.addEventListener('click', function(){
			//rescatar nombre de tarea
			var target= newTarea.value;
			//limpiar textarea
			newTarea.value='';
			//crear elementos
			var newTarget= document.createElement('p');
			//dar atributos a elemento p
			newTarget.setAttribute('class','white');
			//variable que contiene nodo de texto
			var newTargetContent=document.createTextNode(target);

			//dar hijos a padres en orden menor a mayor
			newTarget.appendChild(newTargetContent);
			newList.insertBefore(newTarget, newTarea);

		})
	});

})



