let amigos = [];


function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    if (nombreAmigo === "") {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombreAmigo);
        listaAmigos();
        limpiarCaja();
       
    }
}
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function listaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let elementoLi = document.createElement('li');
        elementoLi.textContent = amigos[i];
        let listaUl = document.getElementById('listaAmigos');
        listaUl.appendChild(elementoLi);
        
    }
    
    
}


function sortearAmigo() {
    document.querySelector('#listaAmigos').innerHTML = '';
    let amigoSorteado = Math.floor(Math.random()*amigos.length);
    let resultado = document.getElementById('amigo');
    resultado.innerHTML = amigos[amigoSorteado];
    console.log(amigos[amigoSorteado]);
    let lista = document.getElementById('resultado');
    lista.innerHTML = "";

    let elementoLi = document.createElement('li');
    elementoLi.textContent = `El amigo secreto sorteado es: ${amigos[amigoSorteado]}`;
    let listaUl = document.getElementById('resultado');
    listaUl.appendChild(elementoLi);
    
}