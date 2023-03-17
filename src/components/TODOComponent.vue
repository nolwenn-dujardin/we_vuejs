<template>
  <div>
    <p>Liste des todos</p>

    <ul>
      <li v-for="todo in todoList" :key="todo">
        {{ todo.intitule }} : {{ todo.etat.toString() }}
        <!--<button v-on:click="removeTodo(todos.indexOf(todo))">X</button> -->
      </li>
    </ul>

    Tâches à faire
    <ul>
      <li v-for="todo in todoListToDo" :key="todo">
        {{ todo.intitule }}
      </li>
    </ul>

    Tâches finies
    <ul>
      <li v-for="todo in todoListDone" :key="todo">
        {{ todo.intitule }}
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    todoList: [],
    todoListToDo: [],
    todoListDone: []
  }

})


</script>

<style scoped>

</style>