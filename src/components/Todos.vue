<template>
  <div>Hello from Todos</div>
  <input v-on:keyup.enter="addTodoToList" v-model="newTodo" placeholder="Add your todo">
  <button v-on:click="addTodoToList">add</button>

  <t-o-d-o-component v-bind:todo-list="todoList"
                     v-bind:todo-list-done="filterDone()"
                     v-bind:todo-list-to-do="filterToDo()"
  ></t-o-d-o-component>

  <button v-on:click="clearTodoList()">Clear todo-list</button>
  <button v-on:click="removeDoneTodo()">Clear todo done</button>

  <footer>
    <span>
      Tâche à réaliser {{ todoList.length }}
    </span>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TODOComponent from "@/components/TODOComponent.vue";
import TODO from "./TODO.vue"

@Options({
  components: {TODOComponent}
})
export default class Todos extends Vue {
  //TODO supprimer une tâche en particulier

  newTodo = ''

  todoList : TODO[] = [new TODO("hello world", "a faire"),
        new TODO("test","fini")]


  addTodoToList(){
    this.todoList.push(new TODO(this.newTodo, "a faire"))
    this.newTodo = ''
  }

  clearTodoList(){
    this.todoList = []
  }

  filterToDo() {
    return this.todoList.filter(n => n.etat.match("a faire"))
  }

  filterDone(){
    return this.todoList.filter(n => n.etat.match("fini"))
  }

  removeDoneTodo(){
    this.todoList = this.filterToDo()
  }

  removeTodo(index: number){
    this.todoList.splice(index,1)
  }
}
</script>

<style scoped>
</style>