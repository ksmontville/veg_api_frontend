<template>
  <div class="navbar bg-blue-300 text-white pr-2 pl-2 lg:pl-12 lg:pr-12">
    <div class="navbar navbar-items flex flex-row flex-nowrap justify-between items-center p-2">
      <div class="navbar navbar-logo text-xs">
        <a href="#">Chop that Veg!</a>
      </div>
      <div class="navbar navbar-toggle flex flex-row flex-nowrap">
        <button class="outline-red" :class="{active: !hidden}" @click="toggleNav">
          <img class="" src="" alt="Menu Nav">
        </button>
      </div>
    </div>

    <div class="navbar navbar-dropdown" :class="{hidden: hidden}">
      <div class="navbar navbar-navlinks flex flex-col flex-nowrap items-start p-2 gap-6">
        <a>Home</a>
        <a>R&eacute;sum&eacute;</a>
        <a>Projects</a>
        <a>About</a>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "NavbarComponent",

  setup() {

    const hidden = ref(true)


    function toggleNav() {
      hidden.value = !hidden.value
    }

    return {
      hidden,
      toggleNav,
    }

    }
  }

</script>

<style scoped>

.active {
  padding: 0.1rem;
  outline: 0.1rem solid whitesmoke;
  border-radius: 2rem;
}

.hidden {
  display: none;
}

@media (min-width: 768px) {

  .navbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

  }

  .navbar-navlinks {
    display: flex;
    flex-flow: row nowrap;
    gap: 0 3.6vw;
  }

  .navbar-toggle {
    display: none;
  }

  .hidden {
    display: flex;
  }

}

</style>