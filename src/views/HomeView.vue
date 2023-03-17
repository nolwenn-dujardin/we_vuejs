<template>
  <div class="home">
    <p v-if="visible">Vous me voyez {{msg}}</p>
    <button v-on:click="foo()">
      ok
    </button>

    <div v-background></div>
    <div v-background:green></div>

    <todos></todos>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Todos from "@/components/Todos.vue";

@Options({
  components: {Todos},
  props: {
    msg: String
  }
})
export default class HomeView extends Vue {
  msg = 'test'
  visible = true;

  foo(){
    this.visible = !this.visible
  }
}
</script>
