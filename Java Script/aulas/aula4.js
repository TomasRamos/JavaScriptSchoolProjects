/*var x = prompt("Número maior que 10");

try {
	var x = y;
}catch(erro){
	alert(erro.toString());
}*/
/*var x = prompt("Número maior que 20");1

try {
	if(x < 20){
		throw "número menor que 20.";
	}
	//var x = y;
	alert("valor inserido: "+x);
}catch(erro){
	alert(erro.toString());
}*/
/*var x = prompt("Número maior que 20");1

try {
	if(x < 20 && x >= 5){
		throw "Erro: (5-9)";
	}
	if(x < 5){
		throw "Erro: (<5)";
	}
	//alert("valor inserido: "+x);
}catch(erro){
	if(erro == "Erro: (<5)"){
		alert("O número inserido foi inferior a 5.");
	}else if(erro == "Erro: (5-9)"){
		alert("O número inserido foi entre 5 e 9.");
	}
}*/
try {
	var x = y;
}catch(erro){
	alert(erro.name+"-"+erro.message);
}finally{
	alert("Terminou a verificação de erro");
}













