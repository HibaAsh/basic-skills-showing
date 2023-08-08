<template>
  <div v-if="skill" class="skill">
    <h1>{{ skill.title }}</h1>
    <p>ID: {{ skill.id }}</p>
    <p>Level: {{ skill.level }}</p>
  </div>
  <div v-else>
    <p>Loading skill details...</p>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            skill: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/skills/' + this.id)
        .then(res => res.json())
        .then(data => this.skill=data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>