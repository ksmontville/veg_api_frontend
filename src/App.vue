<script setup>
</script>

<template>
  <header class="text-center border-b-4 border-lime-200 bg-gradient-to-b from-green-900 to-green-700 text-white p-2">
    <p>The Helpful API for Chopping Veggies.</p>
  </header>

  <nav>
  </nav>

  <main class="flex flex-col items-center min-h-screen text-green-900 p-6">
    <div class="wrapper flex flex-col gap-6">
      <p class="text-center text-white text-7xl p-8 mt-6 mb-6">Chop That Veg!</p>
      <SearchComponent />
    </div>
  </main>

  <footer class="flex flex-col text-center border-t-4 border-lime-200 bg-gradient-to-t from-green-900 to-green-700 text-white mt-auto p-2">
    <small>Kyle Montville, &copy; 2022-2023 </small>
    <small>Background by
      <a class="underline" href="https://unsplash.com/@tangerinenewt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">
        Tangerine Newt</a> on <a class="underline" href="https://unsplash.com/s/photos/vegetable?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">
        Unsplash</a></small>

  </footer>
</template>

<style scoped>

main {
  background-image: url('/img/backgroundsmall.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}

@media (min-width: 768px) {

  main {
      background-image: url('/img/background.jpg');
    background-attachment: fixed;
  }

}

</style>
