<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" placeholder="title" v-model="title">
      <input type="text" placeholder="body" v-model="body">
      <button type="submit">Create Post</button>
    </form>
    <hr/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

  export default {

    data() {
      return {
        title: '',
        body: ''
      }
    },

    methods: {
      ...mapMutations(['createPost']),
      submit() {
        this.createPost({
          title: this.title,
          body: this.body,
          id: Date.now()
        });
        this.title = this.body = '';
      }
    }
    
  }
</script>

<style scoped>

input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

</style>