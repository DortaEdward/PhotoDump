<template>
  <div class="home">
    <Navbar />
    <main class="gallery">
      <div class="post-card">
        <img src="https://images.unsplash.com/photo-1592329347810-258afdd206bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VsZmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="selfie" class="post-img">
      </div>
      <div class="post-card">
        <img src="https://images.unsplash.com/photo-1592329347810-258afdd206bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VsZmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="selfie" class="post-img">
      </div>
      <div class="post-card">
        <img src="https://images.unsplash.com/photo-1592329347810-258afdd206bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VsZmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="selfie" class="post-img">
      </div>
      <div class="post-card">
        <img src="https://images.unsplash.com/photo-1592329347810-258afdd206bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VsZmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="selfie" class="post-img">
        <div class="post-content">
          <p class="post-user">User</p>
          <p class="caption">This is the caption for the post. </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
// import { useRoute } from 'vue-router';
import NavbarVue from '@/components/Navbar.vue';

export default {
  components: {
    Navbar: NavbarVue,
  },
  setup() {
    // const route = useRoute();
    const store = useStore();
    const user = computed(() => store.state.user);

    if (localStorage.getItem('token')) {
      store.dispatch('getUserData');
    }
    return {
      user,
    };
  },
};
</script>

<style scoped>
.gallery{
  max-width: 1024px;
  margin:2em auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.post-card{
  width:325px;
  height:355px;
  border-radius:10px;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: all ease-in-out 0.3s;
  cursor:pointer;
}
.post-card img{
  width:100%;
  height: 262.5px;
  object-fit: cover;
  border-radius:10px 10px 0 0;
}
.post-card:hover{
  transform: scale(1.1);
}
</style>
