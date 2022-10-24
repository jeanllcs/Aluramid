function tocaSom(idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }

    else {
        console.log('Elemento não encontrado');
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');


// Loop para funcionamento dos instrumentos.
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio =  `#som_${instrumento}`;


    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // Eventos do Teclado.

    tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || 'Enter') {
            tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function()  {
        tecla.classList.remove('ativa');
    }

}

