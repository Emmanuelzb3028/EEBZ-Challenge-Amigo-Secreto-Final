// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];
let amigosResta = [];

function agregarAmigo(){ 
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (Amigos.length >= 5){
        alert("Solo puedes ingresar a 5 amigos.");
        return;
    }
   
    if (nombre === "") {
        alert ("Introduce por lo menos dos nombres.");
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ'-]+$/.test(nombre)){
        alert ("ingresa solo letras.");
        return;
    }

    if (Amigos.includes(nombre)) {
        alert("Este nombre ya se encuentra agregado.");
        return;
    }
        Amigos.push(nombre);
        amigosResta = [...Amigos];

        input.value = "";
        input.focus();

        actualizarAmigos();

}

function actualizarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < Amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = Amigos[i];
        lista.appendChild(li);

    }
}

function sortearAmigo(){
    

    if (Amigos.length <2){
        alert("necesitas dos amigos para poder jugar.");
        return;
    }

    if (amigosResta.length === 0){
        alert("Ya se han jugado todos los amigos.");
        document.getElementById("botonSortear").disabled = true;
        document.getElementById("botonAñadir").disabled = true;
        return;
    }
    


    let indice = Math.floor(Math.random() * amigosResta.length);
    let amigoSecreto = amigosResta[indice];

    amigosResta.splice(indice, 1);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    
}





