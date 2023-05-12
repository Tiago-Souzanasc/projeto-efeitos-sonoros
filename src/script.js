
const dancaAudio = new Audio('src/audio/Dança gatinho, dança - Efeito Sonoro (128 kbps).mp3')
document.querySelector('button.button1').addEventListener('click', () => {
    dancaAudio.play()
})

const irraAudio = new Audio('./src/audio/Irra! (efeito de som) (128 kbps).mp3')
document.querySelector('button.button2').addEventListener('click', () => {
    irraAudio.play()
})

const queIssoAudio = new Audio('./src/audio/que isso meu filho calma (128 kbps).mp3')
document.querySelector('button.button3').addEventListener('click', () => {
    queIssoAudio.play()
})

const pareAudio = new Audio('./src/audio/Som de PARE Efeito Sonoro (128 kbps).mp3')
document.querySelector('button.button4').addEventListener('click', () => {
    pareAudio.play()
})

const uepaAudio = new Audio('./src/audio/Uêpa! (128 kbps).mp3')
document.querySelector('button.button5').addEventListener('click', () => {
    uepaAudio.play()
})

const cavaloAudio = new Audio('./src/audio/Cavalo vinhetas (128 kbps).mp3')
document.querySelector('button.button6').addEventListener('click', () => {
    cavaloAudio.play()
})