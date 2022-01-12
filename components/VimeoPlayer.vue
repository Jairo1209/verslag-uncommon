<template>
  <div
    ref="player"
    class="vimeo-player"
    :class="{ 'is-playing' : isPlaying }"
    @click="togglePlay"
  >
    <div
      v-if="!isValidVideo"
      class="vimeo-player__wrapper"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2 text-center">
            <p class="vimeo-player__error">
              Geen geldige URL of ID ingevoerd.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Player from '@vimeo/player'

export default {
  name: 'VimeoPlayer',

  props: {
    src: {
      type: String,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      player: undefined,
      options: {
        id: this.src,
        controls: false,
        loop: true
      },
      isPlaying: false,
      isValidVideo: true,
      duration: 0
    }
  },

  mounted () {
    this.player = new Player(this.$refs.player, this.options)
    this.loadVideo(this.src)
  },

  methods: {
    async loadVideo (id) {
      try {
        await this.player.loadVideo(id)
        this.isValidVideo = true
        this.init()
      } catch (e) {
        this.isValidVideo = false
      }
    },

    init () {
      this.player.on('play', () => {
        this.isPlaying = true
      })

      this.player.on('pause', () => {
        this.isPlaying = false
      })
    },

    togglePlay () {
      this.isPlaying = !this.isPlaying

      if (this.isPlaying) {
        this.player.play()
      } else {
        this.player.pause()
      }
    },

    play () {
      this.isPlaying = true
      this.player.play()
    },

    pause () {
      this.isPlaying = false
      this.player.pause()
    }

  }
}
</script>

<style lang="scss">
.vimeo-player {
  position: relative;
  cursor: pointer;
  background-color: theme-color(secondary);

  &::before {
    display: block;
    padding-bottom: (9 / 16) * 100%; // 16:9 aspect ratio
    pointer-events: none;
    content: '';
  }

  &__wrapper {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }

  &__error {
    color: gray-color(400);
  }
}
</style>
