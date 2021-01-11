//ex1
/*var notamax = 20;
var notamin = 7;
var nota = prompt("Nota de avaliação");
var exame = false;

try{
	if(erro <= 0 || nota >= 20){
		trow("nota inválida");
	}
}catch(erro){
	if(erro <= 0 || nota >= 20){
		alert("nota inválida");
	}
}
if(nota < notamin){
		document.write("Inferior a "+notamin);
	}else if(nota >= notamin && nota <10){
		document.write("igual ou superior a "+notamin+" e menor que 10");
	}else if(nota >= 10 && nota <16){
		document.write("igual ou superior a 10 e menor que 16");
	}else if(nota >= 17){
		document.write("igual ou superior a 16 e menor que "+notamax);
	}
	
	exame = new function(nota){
		if(nota < notamin)
			exame=true;
		else
			exame=false;
		return exame;
	}
document.write("exame -> "+exame);*/
//ex2
/*var nomes = new Array(5);
nomes[0]="carlos";
nomes[1]="Ana";
nomes[2]="Paulo";
nomes[3]="Andreia";
nomes[4]="Juliana";
var nomesMaiusculas = new Array(5);
var nomesprimeiras = new Array(5);
for(var i = 0; i<nomes.length; i++){
	nomesMaiusculas[i] = nomes[i].toUpperCase();
	nomesprimeiras[i] = nomes[i].charCodeAt(3);
	var nomesinvertidos = new function(nomes[i]){
		var nomesinvertidos = nomes.length;
		var count = 0;
		for(var i = nomes.length; i > 0; i--){
			nomesinvertidos[count++] = nomes[i-1];
		}
		for(var i = 0; i < nomesinvertidos.length; i++){
			document.write("<li>"+nomesinvertidos[i]+"</li>");
		}
		return nomesinvertidos[];
	}
}*/
//ex 3

function andar(){
	this.andar = true;
	this.saltar = false;
	this.dormir = false;
	this.comer = false;
}
function saltar(){
	this.saltar = true;
	this.andar = false;
	this.dormir = false;
	this.comer = false;
}
function comer(){
	this.comer = true;
	this.saltar = false;
	this.andar = false;
	this.dormir = false;
}
function dormir(){
	this.dormir = true;
	this.saltar = false;
	this.andar = false;
	this.comer = false;
}

var Pessoa = function(nome,idade){
	return{
		nome: nome,
		idade: idade,
		maioridade: false,
		verificarIdade: function(){
			if(idade >= 18)
			maioridade = true;
		},
		comer: comer(),
		andar: andar(),
		saltar: saltar(),
		dormir: dormir(),
	};
};

var p1 = Pessoa("Nova Pessoa "," 18");
document.write(p1);
//ex4

var Medico = new function(especialidade,numCelulaMed){
	especialidade: especialidade,
	numCelulaMed: numCelulaMed,
	reformaAntecipada: function(){
		if(idade > 30){
			reformaAntecipada = true;
		}else{
			reformaAntecipada = false;
	}
}

var Utente = new function(inscricao){
	inscricao: inscricao,
	ativarinscricao: function(){
		inscricao: true;
	}
}

var p1 = Pessoa("Nova Pessoa "," 18");
document.write(p1);
Medico.prototype = new Pessoa("","");
Utente.prototype = new Pessoa("");

























