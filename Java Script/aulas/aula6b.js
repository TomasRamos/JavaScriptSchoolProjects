var str = "Tomás é o meu nome";
var regex = new RegExp("Tomás");
//alert(regex.test(str));
//Através do literal
var str = "Tomás é o meu nome";
regex = /Tomás/;
//alert(regex.test(str));

//Ignorar case sensitivy
var str = "Tomás é o meu nome";
var regex = /tomás/i;
//alert(regex.test(str));

var str = "Tomás é o meu nome";
var regex = new RegExp("tomás","i");
//alert(regex.test(str));

//Aninhar a expressão
var redex = /tomás/i.test("Tomás é o meu nome");

//-----------------------------------------------------------
var str = "Tomás é o meu nome";
document.write(/tomás/i.exec(str)+"<br />");
//Explicação: O métedo irá procurar a palavra 'Tomás', quando encontra apara a pesquisa e retorna a palavra

//-----------------------------------------------------------
var str = "Tomás é o meu nome, e também é o primeiro nome";
document.write(/noMe/i.exec(str)+"<br />");
document.write(str.match(/nome/ig)+"<br />");
// pesquisa global(g) ignora case sensitivy(i) e retorna todas as ocorrências
//------------------------------------------------------------
document.write("<b>Classe de Chars</b><br />");
//Classe de caracteres
// .->encontra a ocorrência de qualquer caracter(exceto novas linhas)
document.write(/./.test("Programador")+"<br />");
// \w -> encontra a ocorrência de qualquer caracter(alfanuméricos:a-z;A-Z;0-9;_)
document.write(/\w/.test("Programador")+"<br />");
document.write(/\w/.test("*-*-*-*-*-")+"<br />");
// \s -> encontra a ocorrência de qualquer caracter-digito-(numérico: 0-9)
// ^ -> encontra a ocorrência de qualquer caracter no início da pesquisa
document.write(/^f/.test("Programador2")+"<br />");
document.write(/^p/.test("Programador2")+"<br />");
document.write(/^p/i.test("Programador2")+"<br />");
// $ -> encontra a ocorrência de qualquer caracter no final da pesquisa
document.write(/r12$/.test("Programador12")+"<br />");
//verifica se existem digitos no final
document.write(/\d$/.test("Programador12")+"<br />");
document.write(/\d\d$/.test("Programador12")+"<br />");
document.write(/\d\d\d$/.test("Programador12")+"<br />");
//verificar o numero de telefone  Ex:291 123 425
document.write(/^\d\d\d \d\d\d \d\d\d$/.test("291 123 425")+"<br />");
//********************************************************************
//Quantificadores de repetição
// ? - Encontra zero ou mais ocorrências, equivalente a (0,)
document.write(/\d?/.test("291 123 425")+"<br />");
// + - Encontra uma ou mais ocorrências, equivalente a (1,)
document.write(/\d+/.test("291 123 425")+"<br />");
// '(x)' - Encontra x ocorrências.
document.write(/\d{6}/.test("291-123425")+"<br />");
document.write(/\d{6}$/.test("291-123425")+"<br />");
document.write(/^\d{6}$/.test("291-123425")+"<br />");
//Refinar
document.write(/^\d{3}-\d{6}$/.test("291-123425")+"<br />");
document.write(/\(?(\d{3})\)?\d{3}-\d{6}/.test("291-123425")+"<br />");
//*****************************************************
//Datas
document.write(/^\d{2}-\d{2}-\d{4}/.test("12-12-2009")+"<br />");
document.write(/^\d{2}:\d{2}:\d{4}/.test("12:12:2009")+"<br />");
//variação no final da data: +poderemos ter 2 ou 4 dígitos : 09 ou 2009
document.write(/^\d{2}\/\d{2}\/\d{2,4}$/.test("12/12/2009")+"<br />");
document.write(/^\d{2}\/\d{2}\/\d{2,4}$/.test("12/12/09")+"<br />");
//************************************************************
//Validação do email
/*
	Etapas:
	1-Todo o email começa com caracteres: \w+
	2-Localizar a exist~encia de @: +@\w
	3-Localizar o ponto(.) NOTA: não podemos colocar diretamente o ponto na expressão(padrão), uma vez que é uma classe de caracteres, de modo a contornar esta limitação usamos a barra invertida(caracter de saída(escape))
*/
document.write(/\w+@\w+\.\w{2,3}$/.test("tomasrferreira2@gmail.com")+"<br />");
//*****************************************************************
//Agrupar caracteres
//[x,y,z]-Encontra qualquer caracter que pertença ao grupo.
//Usamos o hifen para definir um intervalo, por exemplo qualquer caracter de a-z ->/[a-z]/ ou /[0-9]

document.write(/[om]/.test("Tomás")+"<br />");
document.write(/[om]á/.test("Tomás")+"<br />");
document.write(/[om]t/.test("Tomás")+"<br />");

var str = "Tomás é o meu nome, e também é o primeiro nome";

alert(str.match(/nome/i));
alert(str.replace(/nome/ig,"apelido"));

var str="Perto de braga, o porto é o maior cidade de portugal";
alert(str.match(/p[f-z]/ig));
alert(str.replace(/p[f-z]/ig,"GRANDE"));
//***********************************
//Começa em p tem um ou mais caracteres e termina em o
alert(str.match(/p[f-z]+\wo/ig));
alert(str.replace(/p[f-z]+\wo/ig,"GRANDE Porto"));
//********************************************************
var str_URL = "www.epcc.pt/index.php/formacao-de-formadores.html";
var regex = /www.epcc.pt\/\w{5,}\.\w{3}\/\w{4,}[-]*\w{2}[-]*\w{2,}\.\w{3,}/;
document.write(regex.test(str_URL)+"<br />");

//'()' - Agrupar caracteres numa determinada cláusula, aceder à cláusula criada através da expressão '$' valor da expressão

var regex = /(www.epcc.pt\/\w{5,}\.\w{3})\/\w{4,}[-]*\w{2}[-]*\w{2,}\.\w{3,}/;
document.write(str_URL.replace(regex,"http://$1")+"<br/>");
var regex = /(www.epcc.pt\/\w{5,}\.\w{3})(\/\w{4,}[-]*\w{2}[-]*\w{2,}\.\w{3,})/;
document.write(str_URL.replace(regex,"http://$1:$2")+"<br />");


 



















