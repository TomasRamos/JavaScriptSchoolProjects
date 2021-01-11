var linguagens = new Array("XHTML","CSS","JAVASCRIPT","JQUERY","MYSQL","PHP");
var nv = new Array();
var count = 0;
for(var i = linguagens.length; i > 0; i--){
	if((linguagens[i] % 2) != 0){
		nv[count++] = linguagens[i-1];
	}	
}
for(var i = 0; i < nv.length; i++){
	document.write("<li>"+nv[i]+"</li>");
}

//ex2

var str_URL = new Array("www.atola.pt/index.pt","www.atola.pt/index.php","www.atola.pt/noticias.php ","www.atola.pt/home.php");
var regex = /(www.atola.pt\/)(\w{5,}\.\w{2})/;
expReg(str_URL,regex);
var expReg = function(str_URL,regex){
	for(var i = 0; i < str_URL.length; i++){
		document.write(str_URL[i].replace(regex,"http://$1:$2:$3")+"<br />");
	}
}