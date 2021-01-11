function gravarCookie(name, value, days){
	var expires = "";
	if(days){
		var date = new Date(); //criamos a var que irá receber a data atual.
		var dateMls = date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));//redefenimos a data atual somando os milisegundos correspondentes ao número de dias passado como argumento
		expires = "; expires="+ date.toUTCString(); //validamos a nova data criada e atribuimos o seu valor na var expires
	}
	if(value != null && value != "null"){
		document.cookie = name + "=" + value + expires + "; path=/"; //name +"="+ value + expires; -> desta forma a cookie será criada na pasta onde estamos a trabalhar
	}
}

function lerCookie(name){
	var searchName = name + "=";//var que irá receber o valor das cookies, por forma a podermos comparar com o valor passado no argumento
	var cookies = document.cookie.split(';'); //quebra o array ficando apenas com o nome = valor_cookie
	for(var i = 0; i < cookies.length; i++){
		var c = cookies[i];//guarda na var c o valor da cookie atual
		alert(c);
		while(c.charAt(0) == ' ')//retorna o caracter na pos 0 e verifica se é um espaço
			c = c.substring(1,c.length);
		if(c.indexOf(searchName) == 0)//procura o indíce do nosso cookie
		alert(c.substring(searchName.length, c.length));
	}
	return null;
}
/*
Procedimento de eliminação:
1- recebemos o nome da cookie através do argumento name
2- gravamos novamente a cookie, fazendo uso da função de gravação inválida(-1), desta forma o argumento expires da cookies fica com data inválida e elimina-se.
*/
function eliminarCookie(name){
	gravarCookie(name,'',-1);
	alert("COOKIE: "+name+"\n Eliminado com Sucesso!!!");
}


























