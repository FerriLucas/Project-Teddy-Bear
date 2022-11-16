function contato(){

    var a = document.getElementById('nome').value;
    var b = document.getElementById('email').value;
    var d = document.getElementById('endereco').value;
    var f = document.getElementById('cidade').value;

    var c = parseInt(document.getElementById('fone').value);
    var e = parseInt(document.getElementById('cep').value);

    var g = document.getElementById('estado').value;
    var h = document.getElementById('msg').value;


    if(nome.value == "" || nome.length >= 50){
        if(nome.value == ""){
            alert("");
        }else{
            alert("");
        }
    }
    if(email.value == ""){
        if(){
            alert("");
        }else{
            alert("");
        }
    }
    if(fone.value == "" || fone.value == ){
        if(fone.value == ){
            alert("");
        }else{
            alert("");
        }
    }
    if(endereco.value == ""){
        if(){
            alert("");
        }else{
            alert("");
        }
    }
    if(cep.value == "" || cep.value > 8 || cep.value < 8){
        alert("CEP Invalido");
    }
    
    if(cidade.value == "" || cidade.length < 3){
        alert("Cidade invalida");
    }

    if(msg.value == ""){
        alert("Digite uma mensagem!");
    }

    if(estado.value == "UF"){
        alert("Informe seu Estado!");
    }
}