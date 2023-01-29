<template>
  <div id="app">
    <PostForm />
    <h1>{{ postsCount }}</h1>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostForm from './components/PostForm.vue'

export default {
  name: 'App',

  components: { PostForm },

  // computed: {
  //   allPosts() {
  //     return this.$store.getters.allPosts;
  //   }
  // },

  methods: mapActions(['fetchPosts']),

  computed: mapGetters(['validPosts', 'postsCount']),

  // data() {
  //   return {
  //     posts: []
  //   }
  // },

  async mounted() {
    // this.$store.dispatch('fetchPosts');
    // this.fetchPosts(10);
    this.fetchPosts();
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 60px auto;
  width: 400px;
}

.post {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>
