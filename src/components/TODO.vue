<script lang="ts">


export default class TODO{

  intitule!: string
  etat!: string

  constructor(intitule: string, etat: string) {
    this.intitule = intitule
    this.etat = etat
  }
}
</script>

<style scoped>
</style>