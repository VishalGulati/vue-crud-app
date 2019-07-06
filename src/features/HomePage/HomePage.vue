<template>
    <div class="hello">
        <PostsContainer />
    </div>
</template>

<script>
import PostsContainer from './components/PostsContainer.vue';

export default {
  name: 'HomePage',
  components: {
    PostsContainer
  },
  created () {
    this.$store.dispatch('getPosts').then(() => { console.log('completed') });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
