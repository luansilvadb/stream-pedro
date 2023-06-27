<template>
  <div >
    <video id="my-video"></video>
  </div>
</template>

<script>
import Plyr from 'plyr'
import Hls from 'hls.js'

export default {
  mounted () {
    const player = new Plyr('#my-video', {
      controls: [
        'play-large', // botão de play grande no centro
        'play',
        'mute', // botão de mudo
        'volume', // controle de volume
        'settings', // botão de configurações
        'pip', // picture-in-picture
        'airplay', // botão airplay
        'fullscreen' // botão de tela cheia
      ],
      volume: 0.2 // Definir volume inicial para 20%
    })

    if (Hls.isSupported()) {
      const hls = new Hls({
        liveDurationInfinity: true // Remover barra de carregamento para streams ao vivo
      })
      hls.loadSource('https://live.luansilva.com.br/memfs/04a4cc41-f176-4973-b24b-a774d48b001a.m3u8')
      hls.attachMedia(player.media)
    } else if (player.media.canPlayType('application/vnd.apple.mpegurl')) {
      player.media.src = 'https://live.luansilva.com.br/memfs/04a4cc41-f176-4973-b24b-a774d48b001a.m3u8'
    }
  }
}
</script>

<style>
@import '~plyr/dist/plyr.css';

/* Estilos adicionais ou personalizados */

</style>
