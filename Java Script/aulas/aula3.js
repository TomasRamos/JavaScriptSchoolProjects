const PAR = "o valor par";
var num = 1;
if(num > 1){
	//alert("Maior que um");
}else{
	document.write("nenor que um");
}

//verificar par
var num1 = 40;
if((num1 % 2) == 0){
	document.write("<br />O valor "+num1+" é par");
}else{
	document.write("Impar");
}
//------------------------------------------
// teste da verdade
var verdade = true;
if(verdade){
	document.write("<br /> o teste foi verdadeiro");
}else{
	document.write("<br />Não passou na verificação do if, significa que a condição de teste é falsa");
}
//--------------------------------------------------
/*var num2 = 2;
if(num2 == 0){
	alert("O valor é 0");
}else if(num2 == 1){
	alert("O valor é 2");
}else if(num2 == 2){
	alert("O valor é 2");
}else{
	alert("Outro valor");
}*/
//-----------------------------------------
var idade = prompt("Idade?","Insira a sua idade.");
if(idade <= 10){
	document.write("<span> Menor que 10  anos</span>");
}else if(idade > 10 && idade <= 20){
	document.write("<span> Entre(11 e 20) anos</span>");
}else if(idade > 20 && idade <= 30){
	if(idade > 23 && idade <= 30){
		document.write("<span> Entre(24 e 29) anos</span>");
	}else if(idade == 23){
		document.write("<span> Parabens tens 21 anos </span>");
	}
}else{
	if(idade > 65){
		document.write("<br /><span>Parabens entraste na reforma que não vais ter porque o sistema está falido.</span>");
	}else{
		document.write("<span>Entre(31 e 66)anos</span>");
	}
}
//--------------------------------------------------------------------
//Switch
var num2 = 2;
switch(num2){
	case 1:
		//alert("1");
		break;
	case 2:
		//alert("2");
		break;
	case 3:
		//alert("3");
		break;
	default:
		//alert("Outro valor");
}
//multicase
var estado = "Casado1filho";
switch(estado){
	case "Casado0filho":
	case "Casado1filho":
	case "Casado1filho":
		//alert("Estado: casado");
		break;
	case "Solteiro1filho":
	case "Solteiro1filho":
	case "Solteiro1filho":
		//alert("Estado: solteiro");
		break;
	default:
		//alert("Estado não indentificado");
}
//-------------------------------------------------------------
//
//**************Estruturas de repetição************************
for(var i = 0; i < 4; i++){
	//alert(i);
	document.write("<br />"+i);
}
//-------------------------------------------------------------
var par = "Par: ";
var impar = "Impar:";
for(var i; i < 40; i++){
	if(i%2 == 0){
		if(par == 40){
			par += i;
		}else{
			par += i + "->";
		}//end else do if dos pares
	}else{
		impar += i;
	}//end else do if dos pares
}//end for
alert(par);
alert(impar);
document.write("<br />"+par);
document.write("<br/>"+impar);
//------------------------------------------------------
var contagem = "Contagem ";
for(var i = 0; i<10; i++){
	contagem += i;
}
alert(contagem);
//---------------------------------------------------
var Pessoa = {
	nome: "Tomás",
	idade: "16",
	morada: "casa"
};
for(var atributos in Pessoa){
	alert(atributos+":"+Pessoa[atributos]);
	alert(atributos+":"+Pessoa.nome);
}
alert(typeof(Pessoa));
alert(typeof(Pessoa.nome));












