function cadastrarFilme() {
    event.preventDefault();
    let url = "https://parseapi.back4app.com/parse/functions/create-filme";
    
    let nomeBr = document.getElementById("nomeBr").value;
    let nomeOriginal = document.getElementById("nomeOriginal").value;
    let ano = parseInt(document.getElementById("ano").value);

    body = {
        "nomeBr": nomeBr,
        "nomeOriginal": nomeOriginal,
        "ano": ano
    }

    console.log(url + " => Body=", body);
    
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("X-Parse-Application-Id", "SR88mOTb1V4tEj7QZn9yzLDJwjOYyUKtu0hKrHnq");
    request.setRequestHeader("X-Parse-REST-API-Key", "jXB6alzRHcoLXhUGBfbjUFG5PfL8VK2oAFF6q3B5");
    request.setRequestHeader("Content-Type", "application/json");    
    request.responseType = 'text';
    request.send(JSON.stringify(body));     
    
    request.onload = function() {                                
        let resposta = this.responseText;                     
        const requestResult = JSON.parse(resposta)["result"];        
        document.getElementById('respostas').value = JSON.stringify(requestResult, null, 2);                 
    } 
}


function lerFilme() {
    event.preventDefault();
    let url = "https://parseapi.back4app.com/parse/functions/read-filme";
        
    let filmeId = document.getElementById("codigoFilme").value;        
    body = {
        "filmeId": filmeId
    };

    console.log(url + " => Body=", body);

    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("X-Parse-Application-Id", "SR88mOTb1V4tEj7QZn9yzLDJwjOYyUKtu0hKrHnq");
    request.setRequestHeader("X-Parse-REST-API-Key", "jXB6alzRHcoLXhUGBfbjUFG5PfL8VK2oAFF6q3B5");
    request.setRequestHeader("Content-Type", "application/json");    
    request.responseType = 'text';
    request.send(JSON.stringify(body));   
    
    request.onload = function() {
        let resposta = this.responseText;
        try {
            console.log("lerFilme()="+resposta);
            const jsonFilmeSelecionado = JSON.parse(resposta);        
            const jsonOk = jsonFilmeSelecionado["result"];
            let nomeBrUpd = jsonOk["nomeBr"];
            let nomeOriginalUpd = jsonOk["nomeOriginal"];
            let anoUpd = jsonOk["ano"];    
            document.getElementById('nomeBrUpd').value = nomeBrUpd;
            document.getElementById('nomeOriginalUpd').value = nomeOriginalUpd;
            document.getElementById('anoUpd').value = anoUpd;    
            document.getElementById('filmeSelecionado').value = JSON.stringify(jsonFilmeSelecionado, null, 2);                                     
            const requestResult = JSON.parse(resposta)["result"];
            document.getElementById('respostas').value = JSON.stringify(requestResult, null, 2);    
        }        
        catch(e) {
            document.getElementById('respostas').value = resposta;
        }        
    }             
}


function exibirFilmes() {
    event.preventDefault();
    let url = "https://parseapi.back4app.com/parse/functions/list-filmes";
        
    body = {      
    };
    
    console.log(url + " => Body=", body);
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("X-Parse-Application-Id", "SR88mOTb1V4tEj7QZn9yzLDJwjOYyUKtu0hKrHnq");
    request.setRequestHeader("X-Parse-REST-API-Key", "jXB6alzRHcoLXhUGBfbjUFG5PfL8VK2oAFF6q3B5");
    request.setRequestHeader("Content-Type", "application/json");    
    request.responseType = 'text';
    request.send(JSON.stringify(body));     
    
    let resposta = "";
    request.onload = function() {                        
        resposta = this.responseText;       
        const jsonFilmes = JSON.parse(resposta)["result"];        
        document.getElementById('respostas').value = JSON.stringify(jsonFilmes, null, 2);         
    }         
}


function atualizarFilme() {
    event.preventDefault();
    let url = "https://parseapi.back4app.com/parse/functions/update-filme";
            
    let filmeId = document.getElementById("codigoFilme").value;
    let nomeBr = document.getElementById("nomeBrUpd").value;
    let nomeOriginal = document.getElementById("nomeOriginalUpd").value;
    let ano = parseInt(document.getElementById("anoUpd").value);
    
    body = {
        "filmeId": filmeId,
        "nomeBr": nomeBr,
        "nomeOriginal": nomeOriginal,
        "ano": ano
    };
    
    console.log(url + " => Body=", body);

    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("X-Parse-Application-Id", "SR88mOTb1V4tEj7QZn9yzLDJwjOYyUKtu0hKrHnq");
    request.setRequestHeader("X-Parse-REST-API-Key", "jXB6alzRHcoLXhUGBfbjUFG5PfL8VK2oAFF6q3B5");
    request.setRequestHeader("Content-Type", "application/json");    
    request.responseType = 'text';
    request.send(JSON.stringify(body));     
    
    let resposta = "";
    request.onload = function() {                        
        resposta = this.responseText;
        console.log("atualizar="+resposta);
        const jsonFilmes = JSON.parse(resposta)["result"];        
        document.getElementById('respostas').value = JSON.stringify(jsonFilmes, null, 2);                 
    }         
}


function deletarFilme() {
    event.preventDefault();
    let url = "https://parseapi.back4app.com/parse/functions/delete-filme";
    
    let filmeId = document.getElementById("codigoFilme").value;        
    body = {
        "filmeId": filmeId
    };

    console.log(url + " => Body=", body);

    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("X-Parse-Application-Id", "SR88mOTb1V4tEj7QZn9yzLDJwjOYyUKtu0hKrHnq");
    request.setRequestHeader("X-Parse-REST-API-Key", "jXB6alzRHcoLXhUGBfbjUFG5PfL8VK2oAFF6q3B5");
    request.setRequestHeader("Content-Type", "application/json");    
    request.responseType = 'text';
    request.send(JSON.stringify(body));     
    
    request.onload = function() {
        let resposta = this.responseText;
        document.getElementById('respostas'). value = resposta;
    }     
}


function conectarAoBackEnd() {
    Parse.initialize( 
        "SR88mOTb1V4tEj7QZn9yzLDJwjOYyUKtu0hKrHnq",
        "JPSSpkDvxjEGK0BwVtxgZ52Zg8wjqAgPQ1724Le6");
    Parse.serverURL = "https://parseapi.back4app.com/";     
}
