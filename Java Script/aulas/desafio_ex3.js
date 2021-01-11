window.onload = function(){
	var h2 = document.getElementsByTagName("h2");
	alert(h2);
	var div = document.getElementsByTagName("div").item(1);
	var h2 = div.childNodes.item(3);
	alert(div);
	alert(div.childNodes.length);
	alert(h2);
	alert(h2.childNodes.length);
	
	h2.setAttribute("style","color:#ddccdd");
	h2.appendChild(document.createTextNode(" Consegui aplicar o efeito inserir texto corretamente!"));
	
}