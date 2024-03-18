const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')
const lagarto = document.getElementById('lagarto')
const spock = document.getElementById('spock')  
const pontosJ = document.getElementById('pontosJogador') 
const pontosC = document.getElementById('pontosComputador')
const jogadorEl = document.querySelector('img[name=jogador]')
const computadorEl = document.querySelector('img[name=computador]')
const resultadoEl = document.querySelector('p[name=resultado]')

// Pedra = 0 | Papel = 1 | Tesoura = 2 | Lagarto = 3 | Spock = 4 

// Iniciar eventos de clique nos botões

pedra.addEventListener('click', () => {
    let computador = Math.floor(Math.random() * 5)
    jogadorEl.src = '.././img/icon-rock.svg'
    switch(computador){
        case 0: // Pedra
            computadorEl.src = '.././img/icon-rock.svg'
            resultadoEl.innerHTML = `Resultado: Empatamos...`
            break

        case 1: // Papel
            computadorEl.src = '.././img/icon-paper.svg'
            resultadoEl.innerHTML = `Resultado: Perdeu...`

            break
        case 2: // Tesoura
            computadorEl.src = '.././img/icon-scissors.svg'
            resultadoEl.innerHTML =  `Resultado: Ganhou!`

            break
        case 3: // Lagarto

            break
        case 4: // Spock

            break
    }
    alteraPontos()
})

papel.addEventListener('click', () => {
    let computador = Math.floor(Math.random() * 5)

    switch(computador){
        case 0: // Pedra
            computadorEl.src = '.././img/icon-rock.svg'
            resultadoEl.innerHTML =  `Resultado: Ganhou!`
            
            break
        case 1: // Papel
            computadorEl.src = '.././img/icon-paper.svg'
            resultadoEl.innerHTML = `Resultado: Empatamos...`

            break
        case 2: // Tesoura
            computadorEl.src = '.././img/icon-scissors.svg'
            resultadoEl.innerHTML = `Resultado: Perdeu...`

            break
        case 3: // Lagarto

            break
        case 4: // Spock

            break
    }
    alteraPontos()
})

tesoura.addEventListener('click', () => {
    let computador = Math.floor(Math.random() * 5)

    switch(computador){
        case 0: // Pedra
            computadorEl.src = '.././img/icon-rock.svg'
            resultadoEl.innerHTML = `Resultado: Perdeu...`

            break
        case 1: // Papel
            computadorEl.src = '.././img/icon-paper.svg'
            resultadoEl.innerHTML =  `Resultado: Ganhou!`

            break
        case 2: // Tesoura
            computadorEl.src = '.././img/icon-scissors.svg'
            resultadoEl.innerHTML = `Resultado: Empatamos...`

            break
        case 3: // Lagarto

            break
        case 4: // Spock

            break
    }
    alteraPontos()
})

lagarto.addEventListener('click', () => {
    let computador = Math.floor(Math.random() * 5)

    switch(computador){
        case 0: // Pedra

            break
        case 1: // Papel

            break
        case 2: // Tesoura

            break
        case 3: // Lagarto

            break
        case 4: // Spock

            break
    }
    alteraPontos()
})

spock.addEventListener('click', () => {
    let computador = Math.floor(Math.random() * 5)

    switch(computador){
        case 0: // Pedra

            break
        case 1: // Papel

            break
        case 2: // Tesoura

            break
        case 3: // Lagarto

            break
        case 4: // Spock

            break
    }
    alteraPontos()
})

// Pontos
let contadorJogador = 0
let contadorComputador = 0

function alteraPontos() {
    
}