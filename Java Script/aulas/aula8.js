window.onload = function(){
	//aceder ao elemento intro
	var introP = document.getElementById("intro"); //retorna apenas um nó
	//alert(introP);
	
	var intro2 = document.getElementsByClassName("intro2"); //coleção de nós
	//alert(intro2);
	
	var h3 = document.getElementsByTagName("h3"); //coleção de nós do tipo h3
	//alert(h3);
	
	//Manipulação do valor de um objeto
	introP.innerHTML = "Alterado via API DOM";
	introP.style.color = "#ffddcc"; //DOM HTML
	//OU
	introP.setAttribute("style","color:#0000FF"); //DOM CODE
	
	var img = document.getElementsByTagName("img")[0]; //DOM html
		img.border="20px solid #ddffcc";
		img.style.width="120px";
		//OU
		img.setAttribute("border","4px solid #ffdd00");
		img.setAttribute("style","width:160px")
	var img1 = document.getElementsByTagName("img")[1]; //DOM html
		img1.border="20px solid #ddffcc";
		img1.style.width="120px";
		//OU
		img1.setAttribute("border","4px solid #ffdd00");
		img1.setAttribute("style","width:160px")
	var img2 = document.getElementsByTagName("img")[2]; //DOM html
		img2.border="20px solid #ddffcc";
		img2.style.width="120px";
		//OU
		img2.setAttribute("border","4px solid #ffdd00");
		img2.setAttribute("style","width:160px")
		
//DOM html
//Coleção de dados na API DOM html
//Aceder a tag img no nosso site
//Qt imgs
//alert(document.images.length);
var imgs = document.images; 
/*for(var i = 0; i<imgs.length; i++){
	alert(imgs[i].alt); //aceder ao atributo alt
	alert(imgs[i].src); //aceder ao atributo src
}*/
//Formas de acesso ao elemento
/*alert(imgs[0].alt);
alert(imgs.item(0).alt);*/

//Links(tag a 'a')
/*alert(document.links.length);
alert(document.links[0].text); //aceder ao link 0
alert(document.links[0].href); //aceder ao link 0*/

var links = document.links;
/*for(var i = 0; i<links.length; i++){
	alert(links[i].href); //aceder ao atributo alt
	alert(links[i].name = "Titulo" +1); //acrescentar o parametro name e o atributo um valor
}*/
/*alert(document.forms);
alert(document.forms[0]); //1 formulário
alert(document.forms.length); //qt form na apps*/

var forms = document.forms;
/*for(var i = 0; i <forms.length; i++){
	alert(document.forms[i].method);
	alert(document.forms[i].action);
}*/

//Aceder aos elementos do form

var formElent = document.forms[0];
//alert(formElent.elements.length);
/*for(var i = 0; i<formElent.elements.length; i++){
	alert(formElent.elements[i]); //tipo do elemento
	alert(formElent.elements[i].value);
	alert(formElent.elements[i].id); //valor do atributo id
}*/
//ALTERAR ELEMENTOS(MANIPULAÇÃO)
var t = document.forms[0].elements.irmaos[0].value;
//alert(t);
var elemIrmaos = document.forms[0].elements.irmaos;
for(var j = 0; j<elemIrmaos.length; j++){
	elemItem = document.forms[0].elements.irmaos[j];
	for(var i = 0; i<elemItem.attributes.length;i++){
		//se algum elemento tiver um select por default
		if(elemItem.attributes[i].name == "selected"){
			//alert(elemItem.attributes[i].name+":"+elemItem.attributes[i].value);
			var t2 = document.forms[0].elements.irmaos[1];
			t2.setAttribute("selected","selected");
			var t3 = document.forms[0].elements.irmaos[2];
			t3.removeAttribute("select");
		}
	}
}
//Dados tabela
var tabela = document.getElementById("tabela");
var linha  = tabela.insertRow(0); //inserir linha numa determinadoa tabela:0 na 1 pos; -1 na ultima posição
var cel1 = linha.insertCell(0); //inserir dados na célula
var cel2 = linha.insertCell(1); //inserir dados na célula

cel1.innerHTML = "Criado via JS"; //diretamente na célula
//cel2.innerHTML = "Criado via JS";
//Add através do métedo XML do DOM CORE
cel2.appendChild(document.createTextNode("Criado via JS DOM CORE"));

//Inserir linhas de acordo com a necessidade

function novaLinha(contl1,contl2){
	var tabela = document.getElementById("tabela");
	var linha = tabela.insertRow(nivel);
	var cel1 = linha.insertCell(0);
	var cel2 = linha.insertCell(1);
	ceil.innerHTML = contl1;
	cel2.appendChild(document.createTextNode(contl2));
}//FIM nova linha
/*
	novaLinha("JS1","JS2", 0);
	novaLinha("JS3","JS4", -1);
*/
/*
	var btn_Insert = document.getElementById("btn_new").onclick = function(){}
*/
var btn_Insert = document.getElementById("btn_new");
btn_Insert.onclick = function(){
	tabela.addRow(-1); //adiciona pelo index -1, ultima pos da tabela
}
var btn_delete = document.getElementById("btndel");
btn_delete.onclick = function(){
	tabela.deleteRow(-1); //elimina pelo index -1, ultima pos da tabela
}
//Todas as listas não ordenadas
var listaNaoOrdenadas = document.getElementById('ul');

//Aceder á primeira lista não ordenada
var listaNaoOrdenadas1 = document.getElementsByTagName('ul')[0];

var listaItens = listaNaoOrdenadas1.getElementsByTagName('li');

for(var i = 0; length = listaItens.length; i++){
	alert(listaItens[i].firstChild.data);
}
}

























