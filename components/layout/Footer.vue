<template>
  <footer class="footer section-inset-y">
    <div class="container">
      <div class="footer__row row">
        <div class="col-md-6 offset-md-3 d-flex justify-content-center">
          <LottieLogo />
        </div>
      </div>
      <div class="footer__row row">
        <div class="col-md-3">
          <div class="footer__links-wrapper">
            <n-link to="/home" class="footer__links h6">
              home
            </n-link>
            <div class="bg-fill" />
          </div>
        </div>
        <div class="col-md-3">
          <div class="footer__links-wrapper">
            <n-link to="/bpv/uncommon-apparel" class="footer__links h6">
              uncommon apparel
            </n-link>
            <div class="bg-fill" />
          </div>
        </div>
        <div class="col-md-3">
          <div class="footer__links-wrapper">
            <n-link to="/bpv/fitlab" class="footer__links h6">
              fitlab
            </n-link>
            <div class="bg-fill" />
          </div>
        </div>
        <div class="col-md-3">
          <div class="footer__links-wrapper">
            <n-link to="/slot" class="footer__links h6">
              slot
            </n-link>
            <div class="bg-fill" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.footer {
  background: theme-color(light);

  .footer-hidden & {
    display: none;
  }

  &__links-wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    padding: 20px 0;
    border-bottom: solid 1.2px #0b1116;
  }

  &__links {
    width: 100%;
    font-size: 15px;
    transition: transform .3s ease;
  }

  &__row {
    display: flex;
    align-items: center;
    min-height: 150px;
  }
}

.bg-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 0;
  margin: 0 auto;
  background-color: black;
  transition: height .3s ease;
}

@include media-breakpoint-down(sm) {
  @media (hover: hover) {
    .footer__links-wrapper:hover {
      .footer__links {
        transform: translate3d(15px, 0, 0);
      }
    }
  }
}

@include media-breakpoint-up(md) {
  .footer {
    &__links-wrapper {
      align-items: center;
      justify-content: center;
      min-height: 50px;
      padding: 0;
      border-bottom: none;
    }

    &__links {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
    }
  }

  @media (hover: hover) {
    .footer__links-wrapper:hover {
      .footer__links {
        filter: invert(1);
        transition: filter .3s ease;
      }

      .bg-fill {
        height: 100%;
      }
    }
  }
}
</style>
