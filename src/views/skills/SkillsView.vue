<template>
  <h1>Skills</h1>
  <div v-if="skills.length">
    <div v-for="skill in skills" :key="skill.id" class="skill">
      <router-link :to="{ name: 'SkillDetails', params: { id:skill.id } }">
        <p>{{ skill.title }}</p>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading skills...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/skills')
    .then(res => res.json())
    .then(data => this.skills=data)
    .catch(err => console.log(err.message))
  }
}
</script>

<style>
  .skill p{
    background: rgb(248, 248, 248);
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 300px;
    cursor: pointer;
    color: violet;
  }
  .skill h2:hover{
    background: #ddd;
  }
  .skill a{
    text-decoration: none;
  }
</style>