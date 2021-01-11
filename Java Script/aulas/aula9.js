window.onload = function(){
	//alert("olá");
	//Retornar uma lista de todas as tags h3, apenas quero capturar a primeira
	var h3 = document.getElementsByTagName("h3").item(0);
	alert(h3);
	/*alert(h3.parentNode);
	alert(h3.childNodes); //retorna os elementos filhos*/
	var filhosh3 = h3.childNodes.item(0);
	//alert(filhosh3); //retorna o Nó de texto, visto que h3 apenas tem um filho com o texto contido no elemento
	// ATRIBUTOS DOS NÓS
	// Retornar o nome do nó
	//alert(filhosh3.nodeName);
	/*tipos de Nós
	Retorna um tipo numérico:
	1-Elemento
	2-Atributo
	3-Texto
	*/
	//alert(filhosh3.nodeType);
	//Retornar a quentidade de filhos de elemento
	//alert(filhosh3.childNodes.length);
	
	//Trabalhar nos nós da lista
	var div = document.getElementsByTagName("div").item(0);
	//alert(div);
	
	var ul = div.childNodes.item(1);
	/*alert(ul);
	alert(ul.nodeName);
	alert(ul.nodeType);
	alert(ul.childNodes.length);
	alert(ul.childNodes.item(0));*/
	//alert(ul.firstChild);//Primeiro filho
	
	// Recuperar todos os filhos
	for(var i = 0; i < ul.childNodes.length; i++){
		//alert(ul.childNodes.item(i));
	}
	
	//Capturar o 1º elemento  tipo texto do 1ºli e só o seu valor
	//alert(ul.firstChild.nodeValue);
	
	//Capturar o 1ºfilho do 1ºli
	//alert(ul.childNodes.item(1).childNodes.item(0).nodeValue);
	
	//IMPORTANTE: nodeValue apenas pode ser aplicado a nós do tipo texto, caso contrário devolve null.
	
	//aceder ao li // Neste caso vamos aceder ao 5ºli
	var li = ul.childNodes.item(5);
	//alert(li.firstChild.nodeValue);
	
	//Aceder ao 2º elemento da li, que será a ul
	var liul = li.childNodes[1].childNodes[1];//é igual a fazer -> var liul = li.childNodes[.item(1).childNodes.item(1);
	//alert(liul.firstChild.nodeValue);//item31
	
	//Aceder aos irmãos do elemento
	/*
		<li id="item3">item 3
					<ul>Antes
						<li id="item31">item31</li>
						Depois
						<li id="item32">item32</li>
					</ul>
				</li>
	*/
	//Aceder ao irmão anterior ao elemento
	//alert(liul.previousSibling.nodeValue);
	//Aceder ao irmão seguinte ao elemento
	//alert(liul.nextSibling.nodeValue);
	
	//Acesso desde o elemento DIV
	
	/*alert(div.childNodes[1]);//ul
	alert(div.childNodes[1].childNodes[5]);//3ºli
	alert(div.childNodes[1].childNodes[5].childNodes[1]);// ul
	alert(div.childNodes[1].childNodes[5].childNodes[1].childNodes[3]);//2ºli
	alert(div.childNodes[1].childNodes[5].childNodes[1].childNodes[3].childNodes[0]);//objeto texto
	alert(div.childNodes[1].childNodes[5].childNodes[1].childNodes[3].childNodes[0].nodeValue);//2ºli*/
	
	//OU
	//alert(div.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstChild.nodeValue);//item 31
	
	var ulLength = div.firstElementChild.childElementCount;
	//alert(ulLength); //3elementos
	//************************************************************************************
	//*********************************MANIPULAÇÃO E CRIAÇÃO DE NÓS***********************
	//************************************************************************************
	
	//Criação de elementos
	var div = document.getElementsByTagName("div").item(0);
	// Criar um h3 
	var h3 = document.createElement("h3");
	//add um elemento tipo texto ao h3 criado
	h3.appendChild(document.createTextNode("Cabeçalho h3 via JS"));
	//add no div o elemento criado h3
	div.appendChild(h3);
	
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("li via JS"));
	div.firstElementChild.appendChild(li);
	
	//-------------------------------------------------------
	//Nós do tipo atributo
	var atrib = document.createAttribute("style");
	//add regras ao atributo
	atrib.value = "color:#ff00ff";
	//aplicar ao elemento
	h3.setAttributeNode(atrib);
	
	//OU
	h3.setAttribute("style","color:#00ff00");
	
	//--------------------------------------------------------
	//Add um elemento do tipo select
	var selecao = document.createElement("select");
		selecao.setAttribute("id","estado_civil");
	var opt = document.createElement("option");
		opt.setAttribute("value","Solteiro");
		opt.appendChild(document.createTextNode("Solteiro"));
	var opt1 = document.createElement("option");
		opt1.setAttribute("value","Casado");
		opt1.appendChild(document.createTextNode("Casado"));
		
		selecao.appendChild(opt);
		selecao.appendChild(opt1);
		div.appendChild(selecao);
	//----------------------------------------------------------------
	//Remover Elementos
	/*var eliminar = div.childNodes[1];
	div.removeChild(eliminar);
	
	//remover h3 criado
	var eliminar = div.childNodes[2];
	div.removeChild(eliminar);
	
	//remover h3 existente no document
	var h3document = document.getElementsByTagName("h3").item(0);
	document.body.removeChild(h3document);
	//remover p existente no document
	var pdocument = document.getElementById("intro");
	document.body.removeChild(pdocument);*/
}

























