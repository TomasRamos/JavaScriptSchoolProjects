window.onload = function(){
	document.getElementById("ajax").onclick = function(){
		var ajax;//nova instância de um objeto responsável pela requisição ao servidor
		
		//código crítico
		try{
			//Opera, Firefox, Safari, Chrome
			ajax = new XMLHttpRequest();
			alert("Opera, Firefox, Safari, Chrome");
		}
		catch(e){
			try{
				//IE Browsers
				ajax = new ActiveXObject("Msxml2.XMLHTTP");
				alert("IE browsers");
			}catch(e){
				try{
					//Outros browsers
					ajax = new ActiveXObject("Microssoft.XMLHTTP");
					alert("Outro microssoft");
				}catch(e){
					alert("outro");
					return false;
				}
			}
		}
		var resposta_conteudo = document.getElementById("conteudo");
		/*
			Etapas no processamento da resposta ao pedido HTTP, através da função criada
			RESPOSTAS ao pedido do servidor:
			Valores para o parametro readyState:
			0 - não iniciado
			1 - em carregamento
			2 - caregado
			3 - em processo iterativo
			4 - completo
			---------------------------------------------------------
			Código de estado na resposta HTTP
			200 - ok
		*/
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				alert("cheguei , estou completo e com sucesso");
				//Acesso aos dados da resposta:
				//http_request.responseXML - devolve a resposta como um objeto XML
				try{
					var xml = ajax.responseXML;
					//devolve o valor do primeiro elemento do xml
					while(resposta_conteudo.hasChildNodes()){
						resposta_conteudo.removeChild(resposta_conteudo.lastChild);
					}
					var lformando = xml.getElementsByTagName("formando");
					var i = 0;
					while(i < lformando.length){
						var formando = lformando[i].firstChild.nodeValue;
						resposta_conteudo.appendChild(document.createTextNode(formando));
						resposta_conteudo.appendChild(document.createElement("br"));
						i++;
					}
				}catch(e){
					alert(e.toString());
				}
			}//end if
		}//end onreadystatechange
		try{
			//iniciar o pedido com o métedo open(métedo de request(POST,GET,etc),URL de requisição, por defeito executa em modo assincrono(true));
			//ajax.open("POST","./Aula 10 -Material/file.txt",true);
			
			//------------------------------------------------
			//Para o html seria:
			ajax.open("POST","./Aula 10 -Material/file.xml");
			//-------------------------------------------------
			
		}catch(e){
			alert(e.toString());
		}
		try{
			//O métedo send(), podemos indicar alterações em servidor, enviando dados de requisição.
			//Ex: name=tomas&idade=16
			//ou null se não pretendem alterar
			ajax.send(null);
		}catch(e){
			alert(e.toString());
		}
		return false;
	}//end onclick
}