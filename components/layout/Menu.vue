<template>
  <div
    class="menu"
    :class="{ 'is-open' : menuIsOpen }"
  >
    <nav>
      <ul>
        <li>
          <NuxtLink class="nav-link" to="/test">
            Forest
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/test">
            Ocean
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/test">
            Desert
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  computed: {
    menuIsOpen () {
      return this.$store.state.menuIsOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  visibility: hidden;
  background: theme-color(ocean);
  opacity: 0;
  transition: all 500ms transition(out);

  &.is-open {
    visibility: visible;
    opacity: 1;
  }
}

nav {
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  li {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 15% rem(50px);
    font-family: 'Kaisei Tokumin', serif;
    font-size: rem(50px);
    font-style: normal;
  }
}

.nav-link {
  color: white;
  cursor: pointer;
}
</style>
