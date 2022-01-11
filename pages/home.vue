<template>
  <div>
    <LayoutHero :src="image" />
    <div class="content-home container section-inset-y">
      <div class="content-home__txt-block">
        <ul class="content-home__list">
          <li class="content-home__list-item">
            Naam: Jairo Niks
          </li>
          <li class="content-home__list-item">
            Periode: 1 & 2
          </li>
          <li class="content-home__list-item">
            Opleiding: Mediavormgever
          </li>
          <li class="content-home__list-item">
            Bedrijf: Uncommon
          </li>
        </ul>
      </div>
      <div class="row section-inset-y">
        <div class="text-box col-md-10 offset-md-1">
          <h3 class="text-box__title h4">
            inleiding
          </h3>
          <p class="text-box__body">
            Mijn naam is Jairo Niks ik ben een 4e jaars student aan de opleiding Mediavormgever op het
            Roc van Twente in Enschede. Mediavormgever is een creatieve en brede opleiding waarin je
            je na 2 jaar kunt specialiseren in een van de 4 verschillende richtingen: Motion Design,
            Audio Visueel, Grafisch, Interaction Design.
            <br><br>
            Ik heb gekozen voor de richting Interaction Design, hier leer je websites te designen
            maar ook te bouwen om vervolgens tijdens je stage hierin door te ontwikkelen. Zelf hou
            ik het meest van het ontwikkelen van de websites & webshops, daarom heb ik ook gekozen
            om mijzelf op het gebied van frontend development verder te ontwikkelen tijdens mijn stages.
            <br><br>
            Na mijn eerste stage te hebben afgerond wist ik dat ik voor mijn vervolgstage nieuwe
            technieken wou gaan leren. Door hierop te zoeken ben ik bij Uncommon terecht gekomen.
            De visie van Uncommon sprak mij heel erg aan omdat dit ook in lijn staat met mijn eigen
            visie. Zo maken ze gebruik van de nieuwste technieken op het gebied van frontend development
            en steken ze veel tijd in hun ontwerpen en het bouwen ervan, met als eindresultaat een heel
            gaaf product.
            <br><br>
            Van 6 september tot 28 januari heb ik stage gelopen bij Uncommon.
            Tijdens deze stage heb ik meegeholpen aan verschillende websites voor klanten.
            En heb ik ook een webshop mogen maken voor de kledinglijn van Uncommon zelf.
          </p>
        </div>
      </div>
      <div class="content-home__profile row section-inset-b">
        <div class="col-md-6 offset-md-3">
          <img class="content-home__profile-img" src="~/assets/img/Jairo.jpg" alt="">
        </div>
      </div>
    </div>
    <div style="height: 2000px;" />
  </div>
</template>

<script>
const slugs = ['home']

export default {
  asyncData ({ params, app }) {
    if (slugs.includes('home')) {
      return {
        image: require('~/assets/img/home.jpg')
      }
    } else {
      // eslint-disable-next-line
        console.log('404 komt hier')
    }
  },

  head () {
    return {
      bodyAttrs: {
        class: 'theme-dark'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content-home {
  position: relative;
  margin-top: rem(50px);
  color: theme-color(light);

  &__txt-block {
    position: absolute;
    top: rem(-150px);
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: rem(400px);
    height: rem(225px);
    padding-left: 5%;
    background-color: theme-color(light);
  }

  &__list {
    margin: 0;
    color: theme-color(dark);
    list-style-type: none;
  }

  &__profile-img {
    border: solid rem(15px) theme-color(light);
  }
}

.text-box {
  text-align: center;

  &__title {
    color: theme-color(light);
  }

  &__body {
    font-size: rem(18px);
  }
}

@include media-breakpoint-up(md) {
  .content-home {
    &__txt-block {
      left: 5vw;
    }
  }
}
</style>
