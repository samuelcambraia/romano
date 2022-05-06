if (selectContent == "base64"){
    if(radio == true){
        resultadoArea.innerHTML = codificadorBase64(textAreaContent);
    } else {
        var teste = decodificadorBase64(textAreaContent);
        console.log(teste)
        resultadoArea.innerHTML = teste;
    }
}

else if (selectContent == "cesar"){
    if (radio ==true){
        resultadoArea.innerHTML = codificadorCezar(textAreaContent.toLowerCase(), parseInt(deslocamento));
    } else {
        var teste = decodificadorCezar(textAreaContent.toLowerCase(), parseInt(deslocamento));
        resultadoArea.innerHTML = "";
        resultadoArea.innerHTML = teste;
    }