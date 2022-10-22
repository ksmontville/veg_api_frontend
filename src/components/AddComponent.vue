<template>
  <div class="flex flex-col flex-nowrap max-w-lg">

    <div class="flex flex-row flex-nowrap text-xl">
      <button class="rounded-md rounded-r-none flex-2 bg-gradient-to-b from-orange-600 to-orange-300 text-white w-full p-4" @click="toggleShowMore">Don't See What You're Looking For?</button>
      <button class="rounded-md rounded-l-none flex-1 bg-gradient-to-b from-orange-600 to-orange-300 text-white p-4" @click="toggleShowMore"> + </button>
    </div>


    <div class="rounded-md bg-gradient-to-b from-lime-200 to-lime-50 mb-6">
      <ul v-show="showMore">
        <li class="text-lg p-4">Consider adding to the list!</li>
        <li class="text-lg p-4">Click the 'Add' button below to post to the API.</li>
        <li class="text-lg p-4">Click the 'Show Docs' button to view proper submission etiquette.</li>
      </ul>
      <div class="flex flex-row flex-nowrap min-w-full justify-evenly gap-6 p-8" v-show="showMore">
        <button class="rounded-lg w-1/3 bg-green-900 text-white p-2" @click="toggleShowAddForm">Add</button>
        <button class="rounded-lg w-1/3 bg-green-900 text-white p-2" @click="toggleShowDocs">View Docs</button>
      </div>
      <div class="rounded-md bg-gradient-to-b bg-gradient-to-t from-green-900 to-green-700 text-white p-6" id="docsDiv" v-show="showDocs && showMore">
        <p class="text-center text-xl rounded-md bg-gradient-to-b from-orange-600 to-orange-300 text-white p-4">How to Post a Veggie</p>
        <ul>
          <li class="text-lg p-4" v-for="step in docs" :key="step.id"><strong>{{ step.id }}.</strong> {{ step.text }}</li>
        </ul>
      </div>

      <form class="rounded-md bg-gradient-to-b from-green-900 to-green-700 flex flex-col p-6" id="addForm" v-show="showForm && showMore" @submit.prevent>
        <p class="text-center text-xl rounded-md bg-gradient-to-b from-orange-600 to-orange-300 text-white p-4">Add a new Veggie</p>
        <input class="rounded-md" type="text" placeholder="Name..." v-model="newVeggie.name">
        <textarea class="rounded-md" type="text" placeholder="Description..." v-model="newVeggie.description"></textarea>
        <textarea class="rounded-md" type="text" placeholder="Step-by-Step..." v-model="newVeggie.procedure"></textarea>
        <input class="rounded-md" type="text" placeholder="Link to resource..." v-model="newVeggie.resource">
        <div class="flex flex-row flex-nowrap justify-evenly gap-6 mt-6">
          <button class="rounded-lg w-1/3 bg-orange-300 p-2" @click="addVeggie">Submit</button>
          <button class="rounded-lg w-1/3 bg-orange-300 p-2" @click="clearAddForm">Clear</button>
        </div>
      </form>
    </div>
  </div>



</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  name: "AddComponent",
  props: ['apiURL', 'veggieList', 'getVeggieNames', 'searchResults'],

  setup(props) {
    const showMore = ref(false)
    const showForm = ref(false)
    const showDocs = ref(false)

    const docs = ref([
      {'id': 1, 'text': "Check that the veggie does not exist before adding it to the list"},
      {'id': 2, 'text': "Use a lowercase name field"},
      {'id': 3, 'text': "Use proper English grammar and sentence structure for description field"},
      {'id': 4, 'text': "Separate steps in step-by-step field with a new line/Enter/Return (numbers will be added after entry is submitted)"},
      {'id': 5, 'text': "Submit a link that is not overly busy with images, videos, ads, etc."}
    ])

    const newVeggie = ref({
      "name": "",
      "description": "",
      "procedure": "",
      "resource": ""
    })

    function toggleShowAddForm() {
      showForm.value = !showForm.value
    }

    function toggleShowDocs() {
      showDocs.value = !showDocs.value
    }

    function toggleShowMore() {
      showMore.value = !showMore.value
    }

    async function addVeggie() {
      await axios.post(`${props.apiURL}/veggies/`, {
        "name": newVeggie.value.name,
        "description": newVeggie.value.description,
        "procedure": newVeggie.value.procedure,
        "resource": newVeggie.value.resource
      })
          clearAddForm()
    }

    function clearAddForm() {
      newVeggie.value.name = "";
      newVeggie.value.description = "";
      newVeggie.value.procedure = "";
      newVeggie.value.resource = ""
    }

    return {
      showMore, showForm, showDocs, docs, newVeggie,
      toggleShowMore, toggleShowAddForm, toggleShowDocs, addVeggie, clearAddForm
    }
  }
}
</script>

<style scoped>

</style>