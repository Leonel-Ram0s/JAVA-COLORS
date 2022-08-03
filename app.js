'use strict'

function escolhaCor (){
    const cor = document.getElementById('cor').value.toUpperCase();

    if(cor == 'AZUL')
        document.body.style.backgroundColor = '#291EF5'

        else if(cor == 'VERMELHO')
        document.body.style.backgroundColor = '#FF4659'

        else if(cor == 'VERDE')
        document.body.style.backgroundColor = '#32F58F'

        else if(cor == 'AMARELO')
        document.body.style.backgroundColor = '#F5ED52'
    
      document.body.style.backgroundColor = `#${cor}`
}

document.getElementById('aplicar').addEventListener('click', escolhaCor)