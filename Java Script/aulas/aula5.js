/*var idade = "20";
alert(idade.length);
alert(new String(idade).length);
var nome = new String("Tomás");
console.log(nome);
alert(nome.valueOf());*/
/*var num1 = new Number(1.234525);
alert(typeof(num1));

var n = new Number();
document.write("<br />Valor de n "+n);
var n1 = new Number("Teste");
document.write("<br />Valor de n1 "+n1);
var n2 = new Number("123");
document.write("<br />Valor de n2 "+n2);
var n3 = new Number(12345);
document.write("<br />Valor de n2 "+n3);
var n4 = new Number(false);
document.write("<br />Valor de n4 "+n4);
var n5 = new Number(true);
document.write("<br />Valor de n5 "+n5);*/
/*var n6 = new Number(1234);
var n7 = new Number(n6);
document.write("<br /> Valor de n6 "+n6);
document.write("<br /> Valor de n7 "+n7);

document.write("<br />Valor de NaN "+Number.NaN);
document.write("<br />Valor de MIN_VALUE "+Number.MIN_VALUE);
document.write("<br />Valor de MAX_VALUE "+Number.MAX_VALUE);
document.write("<br />Valor de NEGATIVE_INFINITY "+Number.NEGATIVE_INFINITY);
document.write("<br />Valor de POSITIVE_INFINITY "+Number.POSITIVE_INFINITY);*/
/*var numero = new Number("10.14251");
document.write("<br />Valor de numero "+numero.toFixed());
document.write("<br />Valor de numero "+numero.toFixed(3));
document.write("<br />Valor de numero "+numero.toPrecision());
document.write("<br />Valor de numero "+numero.toPrecision(3));
document.write("<br />Valor de numero "+numero.toString());*/

//**************************String*******************************

/*var exemplo = "JavaScript";
document.write("Texto escrito com o métedo big -> "+exemplo.big() + "<br />");
document.write("Texto escrito com o métedo bold -> "+exemplo.bold() + "<br />");
document.write("Texto escrito com o métedo italics -> "+exemplo.italics() + "<br />");
document.write("Texto escrito com o métedo small -> "+exemplo.small() + "<br />");
document.write("Texto escrito com o métedo strike -> "+exemplo.strike() + "<br />");
document.write("Texto escrito com o métedo sup -> "+exemplo.sup() + "<br />");
document.write("Texto escrito com o métedo sub -> "+exemplo.sub() + "<br />");
document.write("Texto escrito com o métedo toLowerCase -> "+exemplo.toLowerCase() + "<br />");
document.write("Texto escrito com o métedo toUpperCase -> "+exemplo.toUpperCase() + "<br />");
document.write("Texto escrito com o métedo substring(0,4) -> "+exemplo.substring(0,4) + "<br />");
document.write("Texto escrito com o métedo substring(4) -> "+exemplo.substring(4) + "<br />");
document.write("Texto escrito com o métedo substring(4,2) -> "+exemplo.substring(4,2) + "<br />");
document.write("Texto escrito com o métedo substring(2,4) -> "+exemplo.substring(2,4) + "<br />");
var str = "Tomás";
document.write("Texto escrito com o métedo charAt(str.length - 1) -> "+str.charAt(str.length - 1) + "<br />");
document.write("Texto escrito com o métedo charAt(3) -> "+str.charAt(3) + "<br />");
document.write("Texto escrito com o métedo charCodeAt(3) -> "+str.charCodeAt(3) + "<br />");*/

//*********************************Array***************************
/*
var numeros = new Array(); //construção simples sem dimensionamento
var nivel = new Array("baixo","medio","alto"); //construção com atribuição de parâmetros
var exemplo = new Array(5); //construção simples com dimensionamento
exemplo[0] = "ex1";
exemplo[1] = "ex2";
exemplo[2] = "ex3";
exemplo[3] = "ex4";
exemplo[4] = "ex5";

var nivel = ["baixo","medio","alto"]; //forma literal
console.log(nivel);

//JOIN

str_1 = nivel.join(); //baixo,medio,alto
str_2 = nivel.join(","); //baixo, médio, alto
str_3 = nivel.join("*"); //baixo*medio*alto
str_4 = nivel.join("<br />");*/
/*
baixo
medio
alto
*/
/*
//alert(str_3);
document.write(str_1);
document.write("<br />"+str_2);
document.write("<br />"+str_3);
document.write("<br />"+str_4);
// Tamanho
nivel = new Array("baixo","medio","alto","muito alto");
nivel.length = 3; //dimensionar para 2 elementos
console.log(nivel);

//POP
nivel = new Array("baixo","medio","alto","muito alto");
var eliminado = nivel.pop();//a var eliminado contem "muito alto"
alert(eliminado);
console.log(nivel);
//PUSH
nivel = new Array("baixo","medio");
var novo = nivel.push("alto","muito alto");
console.log(nivel);
//REVERSE
nivel = new Array("baixo","medio","alto","muito alto");
nivel.reverse(); //inverter o array
console.log(nivel);
//--------------------------------------------
var removido = nivel.shift(); //consome o primeiro elementos
//alert(removido);
//----------------------------------------------
var num = new Array("Valor 1","Valor 2","Valor 3","Valor 4");
str = num.toString(num);// str contem "Valor 1,Valor 2,Valor 3,Valor 4"
console.log(str);
//-----------------------------------------------
var v = new Array(4);
v[1] = 234;
v[3] = 12345;
document.write("<p>");
document.write("Indice 0 :"+v[0]);
document.write("<br />Indice 1 :"+v[1]);
document.write("<br />Indice 2 :"+v[2]);
document.write("<br />Indice 3 :"+v[3]);
document.write("</p>");
v[2] = "Tomás";
document.write("<p>");
document.write("Indice 0 :"+v[0]);
document.write("<br />Indice 1 :"+v[1]);
document.write("<br />Indice 2 :"+v[2]);
document.write("<br />Indice 3 :"+v[3]);
document.write("</p>");
//---------------------------------------------------
var lp = new Array("XHTML","PHP","JAVA","C","MySQL");
document.write("<p> Este vator possui "+lp.length + " elementos, sendo eles: </p>");
document.write("<ul>");
for(var i = 0; i < lp.length; i++){
	document.write("<li>"+lp[i]+"</li>");
}
document.write("</ul>");
//--------------------------------------------
//Inverter atraves de ciclos
var nv = new Array(lp.length);
var count = 0;
document.write("<p> Este vator possui "+lp.length + " elementos, sendo eles: </p>");
document.write("<ul>");
for(var i = lp.length; i > 0; i--){
	nv[count++] = lp[i-1];
	//document.write("<li>"+lp[i]+"</li>");
}
for(var i = 0; i < nv.length; i++){
	document.write("<li>"+nv[i]+"</li>");
}
document.write("</ul>");
//-------------------------------------------------
//inverter uma string
var nome = "http://www.epcc.pt/?polo=funchal";
var copy = new Array(nome.length);
var ctn = 0;
for(var i = nome.length; i > 0;i--){
	copy[ctn++] = nome[i-1];
}
copy = copy.join("");
document.write("Exemplo de string invertida: <br />Antes -> "+nome+"<br />Depois -> "+copy);
//--------------------------------------------------------------
//Array Avançado - Multidimensional
//Sintaxe : var nomeArray = new Array(new Array,new Array);
//EXEMPLO:
var vN = new Array("Tomás","Ramos");
var vI = new Array(18,56);
var vT = new Array(vN,vI);
//OU
var vT = new Array();
vT[0] = new Array("Tomás","Ferreira","Novo");
vT[1] = new Array(18,56);

document.write("<br />vT[0]"+vT[0]);
document.write("<br />vT[1]"+vT[1]);
document.write("<br />vT"+vT);
document.write("<br />vT[0][0]"+vT[0][0]);
document.write("<br />vT[1][1]"+vT[1][1]);*/

/*
		0	"Tomás"	  |  "Ramos"	|    "Novo"
		------------------------------------------
		1	18	      |     56      |
		------------------------------------------
			0         |      1		|        2

*/
/*
//OU - através do literal
var vT = [["Tomás","Ramos"],[18,56]];

//outra matriz do literal
var vT = [
			["Tomás","Ramos"],
			[18,56,67]
		];
console.log(vT);
console.log(vT.length);//2
console.log(vT[0].length);//2
console.log(vT[1].length);//3
//------------------------------------------------
// Array Associativo '{}' - existe uma assossiação de dados
// ContentValues() - Chave , valor
var vPessoa = {nome:"Tomás",idade:"20",morada:"Casa"};
document.write("<br />pessoa -> nome: "+vPessoa.nome);
document.write("<br />pessoa -> idade: "+vPessoa.idade);
document.write("<br />pessoa -> morada: "+vPessoa.morada);
*/

var data = new Date();
document.write("<br />Data: "+data);
var dataM = new Date(1000*60*60*24*365);//1 ano depois a 01/01/1970
document.write("<br />"+dataM);
var dataE = new Date(2012,02,12,12,12,14,1000);
document.write("<br />"+dataE);
var hoje = new Date();
var h = hoje.getHours();
var m = hoje.getMinutes();
var s = hoje.getSeconds();
document.write("<br />Data de hoje: "+h+":"+m+":"+s);
//--------------------------------------------------------------
var dias_semana = ["domingo","segunda","terça","quarta","quinta","sexta","sábado"];
var hoje = new Date();
document.write("<br />O dia da semana é: "+dias_semana[hoje.getDay()]);
//--------------------------------------------------------------
var hoje = new Date();
document.write("<br />Data no formato DD/MM/AAAA: "+hoje.toLo);






















