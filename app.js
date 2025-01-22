
let amigos = [];


function agregarAmigo() {
    // Capturar el valor del campo de entrada ingresado por el usuario
    let nombreDeAmigo = document.getElementById('amigo').value.trim();

    /* Realizamos esta validación para asegurarnos de que el 
    // campo no esté vacío.
    //  Si está vacío, mostramos un alert con un mensaje de error
    */
    if (nombreDeAmigo === '') {
        alert('Por favor, inserta un nombre');
        return;
    }

// Validación para que solo se acepten strings (letras y espacios)
    if (!/^[a-zA-Z\s]+$/.test(nombreDeAmigo)) {
        alert('Por favor, ingresa solo letras y espacios.');
        return;
    }

if (amigos.includes(nombreDeAmigo)) {
      alert('Este nombre ya ha sido ingresado.');
      return;
    }

    amigos.push(nombreDeAmigo);
    limpiarCampo();
    mostrarLista();
  
}

// Función que permite limpiar el campo de entrada al ingresar el nombre de amigo
function limpiarCampo() {
    document.getElementById('amigo').value = '';
}

function mostrarLista() {
    // Obtener el elemento de la lista
    let listaDeAmigos = document.getElementById('listaAmigos');
    // Limpiar la lista existente
    listaDeAmigos.innerHTML = "";

    // Iterar sobre el arreglo de amigos
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaDeAmigos.appendChild(li);
    });
    return;
}

function sortearAmigo() {
    // Validamos si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

// Validamos si hay menos de dos amigos en la lista
if (amigos.length === 1) {
    alert("Debe haber al menos dos amigos para realizar el sorteo");
         return;
}

    // Generamos un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Aquí obtenemos el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Por ultimo mostramos el resultado en el elemento con el ID 'resultado'
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo secreto es: ${amigoSorteado}`;
}

// Llamamos a mostrarLista inicialmente para mostrar la lista vacía
mostrarLista();





