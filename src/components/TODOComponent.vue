<template>
  <div>
    <p>Liste des todos</p>

    <ul>
      <li v-for="todo in todoList" :key="todo">
        {{ todo.intitule }} : {{ todo.etat.toString() }}
        <button v-on:click="removeTodo(todoList.indexOf(todo))">X</button>
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
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    todoList: [],
    todoListToDo: [],
    todoListDone: []
  }
})
//export default class Todos extends Vue {
export default class TODOComponent extends Vue {
  removeTodo(index: number) {
    this.$emit('removetodo', index)
  }

}


</script>

<style scoped>

</style>