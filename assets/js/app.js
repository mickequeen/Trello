
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
	nameList.setAttribute('id', 'listTitle')
	var nameContent= document.createTextNode(listName);
	var addCard= document.createElement('a');
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
	newList.appendChild(addCard);
	newContainer.appendChild(newList);

	//añadir evento a texto de añadir tarea
	addCard.addEventListener('click', function(){
		addCard.classList.add('mostrar')
		//crear textarea
		var newTarea= document.createElement('textarea');
		newTarea.classList.add('class', 'tarea')
		//crear boton añadir
		var addBot= document.createElement('button');
		//texto en boton
		var buttonContent=document.createTextNode('Añadir')


		newList.appendChild(newTarea);
		addBot.appendChild(buttonContent);
		newList.appendChild(addBot);

		addBot.addEventListener('click', function(){
			//rescatar nombre de tarea
			var target= newTarea.value;
			//limpiar textarea
			newTarea.value='';
			//crear elementos
			var newTarget= document.createElement('p');
			newTarget.setAttribute('class','white');
			var newTargetContent=document.createTextNode(target);

			newTarget.appendChild(newTargetContent);
			newList.insertBefore(newTarget, newTarea);

		})
	});

})



