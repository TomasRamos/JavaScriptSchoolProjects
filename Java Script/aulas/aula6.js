function fsemRetorno(){
		document.write("Função sem retorno");
}
function calcularSoma(){
	return 10+3;
}
function imprime(txt){
	document.write(txt+"<br />");
}
function multiplicar(x,y){
	return x*y;
}
//Chamadas dos métedos : Sintaxe: nomeFunção()

fsemRetorno();
var soma = calcularSoma();
var mul = multiplicar(4,5);
imprime(soma);
imprime("<br />Qubra<br />Nova Quebra<br />");
imprime(mul);

var mult1 = new Function("v1","v2","return v1*v2;");
var resM1 = mult1(4,4);

var mult2 = function(v1,v2){
	return v1*v2;
}
mult2(5,89);

imprime(resM1);
imprime(mult2(5,89));

//-----------------------------------------------------
//Click no elemento da lista Evento onClick();

function onClick(){
	alert("Evento de click , através de atributo(onclick) da tag html 'li'");
}
//******************ERRO NO MOMENTO NA IMVOCAÇÃO**********************
/*document.getElementById("refUS").onclick = function(){
	alert("Fui referenciado de forma correta");
}*/
//******************FORMA CORRETA*********************************
/*window.onload = function(){
	document.getElementById("refUS").onclick = function(){
		alert("Fui referenciado de forma correta");
	}
}*/

//*************************************BOM(Browser Object Model)******************************
window.onload = function(){
	/*alert("olá");
	confirm("tem a certeza");
	prompt("Índique o seu nome: ");
	open("aula5.html","título da nova página","width=100,height=100,toobar=no,location=no");*/
	/*document.getElementById("refUS").innerHTML = "olá fui inserido via java script";
	alert("appName:"+navigator.platform);
	alert("appVersion:"+navigator.appVersion);
	alert("appAgent:"+navigator.userAgent);
	
	var plugins = navigator.plugins;
	var p = "";
	for(var i = 0;i < plugins.length;i++){
		p += plugins[i].name + "\n";
	}
	alert(p);*/
	
	//objeto de localização de informação relativa a localização a localização do documento
	
	/*document.write(location.href);
	document.write(location.protocol);*/
	
	alert(screen.width+":"+screen.height);
	document.getElementById("tempo").onclick = function(){
		inicioPedido();
	}
	document.getElementById("tempo").onclick = function(){
		paraContagem();
	}
	//setInterval - definimos um intervalo de tempo entre requisições
	setInterval(relogio,1000);
	var aualiza = 3; //mudar de 3 em 3 segundos a imagem
	var intervalControl = setInterval(rodarImagem,aualiza*1000);
}
function atualizarPagina(){
	window.location.reload();
}

//****************************************************************************
alert("W: "+screen.width+" H"+screen.height);
//****************************************************************************

function retroceder(){
	window.history.back();
}
//-----------------------------------------------------------------------------
function avancar(){
	window.history.forward();
}
//-----------------------------------------------------------------------------
function irPara(){
	window.history.go(1);
}
//-------------------------------------------------------------------------------
function retroceder2Niveis(){
	window.history.go(-2);
}
//*********************************************************************************
//contadores
var c = 10;
var t;
function iContador(){
	document.getElementById('txt').innerHTML = c;
	c--;
	t = setTimeout("iContador()",1000);
}
var t;
var a;
function iniciar(){
	a = prompt("Iniciar em s?");
	contador();
}
function contador(){
	if(a > 0){
		document.getElementById('txt').innerHTML = a;
		a--;
		t = setTimeout("contador()",1000);
	}else{
		alert("Fim!!!");
	}
}
function cancelar(){
	clearTimeout(t);
	alert("Cancelado!!!");
}
//---------------------------------------------------------------------
function redirecionar(){
	location.replace('http://google.pt');
}
var y;
var t1;
function iniciarRedirecionamento(){
	contadorRedirecionamento();
}
function contadorRedirecionamento(){
	document.getElementById('txt').innerHTML = y;
	y--;
	t1 = setTimeout("contadorRedirecionamento()",1000);
	if(y == 0)
		redirecionar();
}
function cancelarRedirecionamento(){
	if(t1 !== null){
		clearTimeout(t1);
		y = 5; //limpar a var, caso contrário ao pressionar novamente 'iniciar Redirecionamento', continuava do ponto onde parou
		alert("Cancelado!!!");
	}
}
//***************************************************************
var w;
var count;

function inicioPedido(){
	tp = prompt("Iniciar a contagem em(S) ou (M)");
	switch(tp){
		case 'S':
		case 's':
			tps = prompt("Iniciar em qt segundos");
			break;
		case 'M':
		case 'm':
			tpm = prompt("Iniciar em qt minutos");
			break;
		default:
			break;
	}
}
function contagem(w){
	if(w > 0){
		document.getElementById('txt').innerHTML = w;
		w--;
		count = setTimeout(function(){contagem(w)},1000);
	}else{
		clearTimeout(count);
		delete w;
		alert("Acabou a contagem");
	}
}

function paraContagem(){
	if(count !== null){
		alert("Parou a contagem");
		clearTimeout(count);
	}
}

//--------------------------------------------------------------------------
function verificarTime(j){
	if(j < 10){
		j="0"+j;
	}
	return j;
}
function relogio(){
	var now = new Date;
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	
	m = verificarTime(m);
	s = verificarTime(s);
	
	var time = h+":"+m+":"+s; //12:12:!2
	document.getElementById("relogio").innerHTML = time;
}
//------------------------------------------------------------------
//passagem de imagens
var posImagem = 0;//variável que armazena e controla a referencia
var imagens = [];//através do literal
/*imagens[0] = "./imagem/1.jpg";
imagens[1] = "./imagem/1.jpg";
imagens[2] = "./imagem/1.jpg";
imagens[3] = "./imagem/1.jpg";
imagens[4] = "./imagem/1.jpg";
imagens[5] = "./imagem/1.jpg";
imagens[6] = "./imagem/1.jpg";*/

//Array assossiativo
imagens[0] = {src: "./imagem/1.jpg", alt: "imagem 1"};
imagens[1] = {src: "./imagem/2.jpg", alt: "imagem 2"};
imagens[2] = {src: "./imagem/3.jpg", alt: "imagem 3"};
imagens[3] = {src: "./imagem/4.jpg", alt: "imagem 4"};
imagens[4] = {src: "./imagem/5.jpg", alt: "imagem 5"};
imagens[5] = {src: "./imagem/6.jpg", alt: "imagem 6"};
imagens[6] = {src: "./imagem/7.jpg", alt: "imagem 7"};

function rodarImagem(){
	document.images["rodar"].style.width = "200px";
	document.images["rodar"].style.height = "200px";
	document.images["rodar"].src = imagens[posImagem]["src"];
	document.images["rodar"].title = imagens[posImagem++]["alt"];
	//posImagem++;
	//Quando a variável contador for igual ou superior á dimensão do array, voltamos ao ponto inicial
	
	if(posImagem >= imagens.length){
		posImagem = 0;
	}
}




















