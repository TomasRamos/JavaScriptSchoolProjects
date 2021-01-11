//Função construtora
function Carro(velMax){

	this.velocidadeMax = velMax;
	this.ligado = false;
}
var carro = new Carro(230);
document.write(carro.velocidadeMax+"<br />");

carro.cor = "azul";
document.write(carro.cor+"<br />");
//-------------------------------------pelo prototype-------------------------------------
function liga(){
	this.ligado = true;
}

Carro.prototype.ligar = liga;
document.write(carro.ligado+"<br />");
carro.ligar();
document.write(carro.ligado+"<br />");
// Pelo métedo no objeto
var carro2 = new Carro(1200);
carro2.ligar = liga;
document.write(carro2.ligado+"<br />");
carro2.ligar();
document.write(carro2.ligado+"<br />");
//---------------------------------------Na estrutura da classe--------------------------------

function liga(){
	this.ligado = true;
}
function Mota(velMax){
	this.velocidadeMax = velMax;
	this.ligado = false;
	this.ligar = liga;
}

var mota = new Mota(2300);
document.write(carro2.ligado+"<br />");
mota.ligar();
document.write(carro2.ligado+"<br />");

//Literal do objeto
/*var Familia = {
				nomeFamilia:"Ramos",
				qyAgregados:3,
				vencimentoAgregados:1200,
				filhos1:{
							nomeFilho:"Tomás",
							idadeFilho:16,
						},
				filhos2:{
							nomeFilho:"Madalena",
							idadeFilho:11
						}
		   };
		   
document.write("<br />" + Familia.nomeFamilia + "tem no agregado" + Familia.qyAgregados + "elementos" + Familia.vencimentoAgregados + "€, o primeiro filho chama-se " + Familia.filhos1.nomeFilho + "e tem "+Familia.filhos1.idadeFilho + " anos");*/
//*********************************************************************************
// Composição dos objetos

function Familia(n,v){
	this.nome = n;
	this.vencimento = v;
}
function Filho(n,i){
	this.nome = n;
	this.idade;
}
var familia = new Familia ("Ramos",1242414);
var f1 = new Filho("Tomás",16);
var f2 = new Filho("Madalena",11);
familia.filhos1 = f2;
familia.filhos2 = f2;
document.write("<br />" + familia.nome + "vivem com "+ familia.vencimento + " €, o filho é o/a "+ familia.filhos1.nome+" e tem "+familia.filhos1.idade+" anos");

function Aquecedor(temp){
	var temperaturaMaxPermitida = 40;
	var temperaturaMedia = 25;
	if(temp > 0 && temp <= temperaturaMaxPermitida){
		this.temperatura = temp;
	}else{
		this.temperatura = temperaturaMedia;
	}
	this.ligado = false;
	this.ligar = function(){
		this.ligado = true;
	}
}
var a = new Aquecedor(29);
document.write("<br />"+a.temperatura);
document.write("<br />"+a.temperaturaMaxPermitida);
//-------------------------------------------------------------
//Herança
document.write("<br />Herança<br />");
function Pessoa(){
	this.nome="Sem Nome";
	this.temFilhos = false;
	this.criarFilhos = function(){
		this.temFilhos = true;
	}
	this.retirarFilhos = function(){
		this.temFilhos = false;
	}
}
function Aluno(nota){
	var notaMaxExame = 20;
	var notaMinExame = 7;
	var vaiExame = false;
	if(nota > 7 && nota <= notaMaxExame){
		this.notaFinal = nota;
		this.vaiExame = vaiExame;
	}else{
		this.notaFinal = nota;
		this.vaiExame = true;
	}
}
Aluno.prototype = new Pessoa();
var aluno = new Aluno(6);
document.write("<br />"+aluno.vaiExame);
document.write("<br />"+aluno.notaMinExame);
document.write("<br />"+aluno.notaFinal);
document.write("<br />"+aluno.temFilhos);
aluno.criarFilhos();
document.write("<br />"+aluno.temFilhos);

//********************************************************************
//Exemplo 2
document.write("<br />Exemplo 2<br />");
//Função construtora
var Pessoa = function(n,c){
	this.nome = n;
	if(c){
		this.contato = c;
	}
};
//Adicionar metedos ao objeto Pessoa
/*var Pessoa = function(n,c){
	this.nome = n;
	if(c){
		this.contato = c;
	}
	this._toString() = function(){
		document.write("Nome:"+this.nome+"contato: "+this.contato);
	}
};*/
//Subscrever o prototype
var Pessoa = function(n,c){
	this.nome = n;
	if(c){
		this.contato = c;
	}
};

Pessoa.prototype = {
						constructor: Pessoa,_toString:function(){
							document.write("_toString -> Nome: "+this.nome+" contato: "+this.contato);
						},
						imprimeNome:function(){
												document.write("IN -> Nome: "+this.nome);
											  }
				   };
var p1 = new Pessoa("Tomás Ramos","96345362");
p1._toString();
//-----------------------------------------------
//Retorna o objeto literal, não é necessário o operador 'new'.

var Pessoa = function(nome,contato){
	return{
		nome: nome,
		contato: contato,
		imprimeNome: function(){
			document.write("<br />imprimeNome -> Nome: "+this.nome);
		}
	};
};

var p1 = Pessoa("Nova Pessoa "," 1234616");
p1.imprimeNome();
alert(p1.nome);
























