<template>
  <div class="video-container">
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
      hls.loadSource('https://live.luansilva.com.br/memfs/fa1a5fc6-d979-465f-9307-cc17cda3178c.m3u8')
      hls.attachMedia(player.media)
    } else if (player.media.canPlayType('application/vnd.apple.mpegurl')) {
      player.media.src = 'https://live.luansilva.com.br/memfs/fa1a5fc6-d979-465f-9307-cc17cda3178c.m3u8'
    }
  }
}
</script>

<style>
@import '~plyr/dist/plyr.css';

/* Estilos adicionais ou personalizados */

.video-container {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
}

#my-video {
  width: 100%;
  height: 100%;
}
</style>
