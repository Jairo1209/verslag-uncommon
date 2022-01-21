<template>
  <div
    ref="player"
    class="vimeo-player"
    :class="{ 'is-playing' : isPlaying }"
    @click="togglePlay"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <div class="vimeo-player__overlay" />
    <div class="vimeo-player__inner">
      <div
        class="vimeo-player__button vimeo-player__button--pause"
        :class="{ 'vimeo-player__button--visible' : isPlaying } "
      >
        pause
      </div>
      <div
        class="vimeo-player__button vimeo-player__button--play"
        :class="{ 'vimeo-player__button--visible' : !isPlaying } "
      >
        play
      </div>
    </div>

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
      this.isPlaying ? this.player.play() : this.player.pause()
    },

    mouseover () {
      this.$refs.player.classList.add('on-hover')
      this.$refs.player.classList.remove('on-leave')
      console.log(this.$refs.player)
    },

    mouseleave () {
      this.$refs.player.classList.add('on-leave')
      this.$refs.player.classList.remove('on-hover')
      console.log(this.$refs.player)
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

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);

    .vimeo-player.is-playing & {
      opacity: 0;
    }
  }

  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  &__button {
    position: absolute;

    &--pause {
      opacity: 0;
      transition: transform .3s ease, opacity .3s ease;
      transform: translate3d(0, 20px, 0,);
    }

    &--play {
      opacity: 1;
      transition: transform .3s ease, opacity .3s ease;
      transform: translate3d(0, 0, 0,);

      .vimeo-player.is-playing & {
        opacity: 0;
        transform: translate3d(0, 20px, 0,);
      }
    }
  }
}

.vimeo-player.is-playing.on-hover {
  .vimeo-player__overlay {
    opacity: 1;
  }

  .vimeo-player__button {
    &--pause {
      opacity: 1;
      transform: translate3d(0, 0, 0,);
    }
  }
}

.vimeo-player.is-playing.on-leave {
  .vimeo-player__overlay {
    opacity: 0;
    transition: opacity .3s ease;
  }

  .vimeo-player__button {
    &--pause {
      opacity: 0;
      transform: translate3d(0, 20px, 0,);
    }
  }
}
</style>
