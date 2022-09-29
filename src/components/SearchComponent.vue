<template>

  <div class="rounded-md flex flex-col flex-nowrap justify-center items-center p-8 max-w-lg" id="search-form">

    <input class="rounded-md min-w-full text-lg p-4 mb-6" type="search" placeholder="Search for a veggie..." v-model="veggieSearch">
    <select class="rounded-md min-w-full text-lg p-4 mb-12" v-model="veggieList" @change="getVeggie(veggieList)">
      <option value="" disabled selected>Or pick from the list...</option>
      <option class="" v-for="veggieName in veggieNames" :key="veggieName" :value="veggieName.name">{{ veggieName.name }}</option>
    </select>
    <div class="flex flex-row justify-center gap-6">
      <button class="rounded-lg bg-green-900 text-white text-xl p-3" type="submit" @click="getVeggie(veggieSearch.toLowerCase())">Search</button>
      <button class="rounded-lg bg-green-900 text-white text-xl p-3" type="submit" @click="clearForm">Clear</button>
    </div>
  </div>

  <results-component :search-results="searchResults" :to-title-case="toTitleCase" />
  <add-component :api-u-r-l="apiURL" :veggie-list="veggieList" :get-veggie-names="getVeggieNames" :search-results="searchResults" />


</template>

<script>
import axios from "axios";
import {ref} from "vue";

const apiURL = 'https://veg-api-backend.herokuapp.com'

export default {
  name: "SearchComponent",
  props: [],

   setup() {
    const veggieNames = ref([])
    const veggieSearch = ref('')
    const veggieList = ref('')
    const searchResults = ref({
    'name': "",
    'description': "",
    'procedure': "",
    'resource': ""
    })


    getVeggieNames()

    async function getVeggieNames() {
      const response = await axios.get(`${apiURL}/veggies`)
      const data = response.data

      for(const veg of data) {
        veggieNames.value.push({'id': veg.id, 'name': veg.name.toLowerCase()})
      }
     }

     async function getVeggie(name) {
      const response = await axios.get(`${apiURL}/veggies/${name.toLowerCase()}`)
      searchResults.value.name = response.data.name
      searchResults.value.description = response.data.description
      searchResults.value.procedure = response.data.procedure
      searchResults.value.resource = response.data.resource
     }

     function toTitleCase(str) {
      return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
    }

    function clearForm() {
      veggieSearch.value = ""
      veggieList.value = ""
      getVeggie(veggieSearch)
    }

    return {
      apiURL, veggieNames, veggieSearch, veggieList, searchResults,
      getVeggieNames, getVeggie, toTitleCase, clearForm

    }

  }
}
</script>

<style scoped>


</style>