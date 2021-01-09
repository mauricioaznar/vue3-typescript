<template>
  <div class="home">
    <button @click="toggleDropdown">Dropdown</button>
    <div v-if="dropdown">
      <div v-for="listEntry in list" :key="listEntry.name">
        {{listEntry.name}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useDropdown} from "@/reusables/dropdown";
import {useList} from "@/reusables/useList";

interface List {
  id: number;
  name: string;
}

export default defineComponent({
  setup(){
    const list = useList<List>()
    list.entries.value = [{id: 1, name: 'name 1'}] as List[]
    return {
      ...useDropdown(),
      list: list.entries.value
    }
  },
})
</script>
