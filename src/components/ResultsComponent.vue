<template>
   <div class="rounded-md max-w-lg" id="steps" v-if="searchResults.name">
    <div>
      <p class="text-center text-xl rounded-md bg-gradient-to-b from-orange-600 to-orange-300 text-white p-4">How to Chop {{ toTitleCase(searchResults.name) }}</p>
    </div>
     <ul class="rounded-md bg-gradient-to-b from-lime-200 to-lime-100" v-if="searchResults.procedure">
       <li class="text-lg p-4" v-for="step in formatProcedure(searchResults.procedure)">{{ step }}</li>
     </ul>
     <ul class="rounded-md bg-lime-200" v-else>
       <li class="text-lg p-4"><em>Seems there's nothing here yet...</em></li>
     </ul>
  </div>

  <div class="rounded-md bg-gradient-to-b from-lime-200 to-lime-100 max-w-lg" id="resource" v-if="searchResults.name">
    <div>
      <p class="text-center text-xl rounded-md bg-gradient-to-b from-orange-600 to-orange-300 text-white p-4">More Information</p>
    </div>
    <ul class="max-w-fit rounded-md" v-if="searchResults.resource">
<!--      <li class="text-center underline text-xl p-4">{{ toTitleCase(searchResults.name) }}</li>-->
      <li class="text-lg p-4">
        {{ searchResults.description }}
      </li>
      <li class="p-4 overflow-ellipsis">
        <a class="underline" :href="searchResults.resource" target="_blank">{{ searchResults.resource }}</a>
      </li>
    </ul>
    <ul class="rounded-md" v-else>
       <li class="text-lg p-4"><em>Seems there's nothing here yet...</em></li>
   </ul>
  </div>
</template>

<script>

export default {
  name: "ResultsComponent",
  props: ['searchResults', 'toTitleCase'],

  setup() {

    function formatProcedure(str) {
      let formatted_string = ""
      const split_str = str.split("\n")

      for (let i=1; i <= split_str.length; i++) {
        const new_str = `${i}. ${split_str[i - 1]}\n`
        formatted_string += new_str
      }
      return formatted_string.split("\n")
    }

    return {
      formatProcedure
    }
  }
}
</script>

<style scoped>

</style>