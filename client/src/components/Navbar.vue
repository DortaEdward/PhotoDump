<template>
  <header v-if="user">
    <div class="header-container">
      <section class="left">
        <p class="logo">logo</p>
      </section>
      <section class="middle">
        <input type="text" class="searchbar" placeholder="Search....">
      </section>
      <section class="right">
        <nav>
          <ul class="nav-links">
            <li>
              <svg
                viewBox="0 0 24 24"
                class="icon">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </li>
            <li>
              <svg
                viewBox="0 0 24 24"  class="icon">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </li>
            <li class="user">
              <div class="userIcon">{{user.displayName[0]}}</div>
              <p class="user-displayName">{{user.displayName}}</p>
              <div class="dropdown">
                <svg
                  viewBox="0 0 24 24"
                  class="icon" @click="toggleDropDownMenu">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <div class="dropdown-menu" :class="{active: active}">
                  <router-link to="/settings" class="links">Setting</router-link>
                  <a class="links" @click="logout">Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </header>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Navbar',
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const router = useRouter();
    const active = ref(false);

    const toggleDropDownMenu = () => {
      active.value = !active.value;
    };

    const logout = () => {
      localStorage.clear();
      router.push('/');
    };

    return {
      user,
      active,
      toggleDropDownMenu,
      logout,
    };
  },
};
</script>

<style scoped>
header{
  width:100%;
  height:4rem;
  font-weight: 600;
  font-size:1rem;
  background:#fff;
  height:5rem;
}
.header-container{
  display:flex;
  align-items: center;
  justify-content: space-between;
  max-width:1024px;
  margin:0 auto;
  height: 100%;
}
.logo{
  margin-left:1rem;
}

.searchbar{
  font-size:1rem;
  padding:0.4rem 1rem;
  width: 16rem;
  background: rgb(240, 240, 240);
  border-radius: 10px;
  border:none;
}
.searchbar:focus{
  outline:none;
}
.nav-links{
  display: flex;
  gap: 1rem;
  list-style: none;
  align-items: center;
  justify-content: center;
}
.user{
  display:flex;
  align-items: center;
  margin-right:1rem;
}

.userIcon{
  width:30px;
  height:30px;
  border:solid 2px black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size:1.4rem;
}
.user-displayName{
  margin:0 0.4rem;
}

.dropdown{
  position: relative;
  width:5rem;
}

.dropdown-menu{
  position: absolute;
  left:0;
  top:calc(100% + 0.25rem);
  background: #fff;
  padding:.75rem;
  border-radius: .25rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
  pointer-events: none;
  z-index:1;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  display: flex;
  flex-direction: column;
}

.links{
  text-decoration: none;
  height: 1.4rem;
  width: 100%;
  border-bottom: solid 1px black;
  margin: 0.4rem auto;
  padding: 0.4rem auto;
}

.dropdown-menu.active{
  pointer-events:all;
  opacity: 1;
}

.icon{
  width:30px;
  height:30px;
  stroke:currentColor;
  stroke-width:2;
  fill:none;
  stroke-linecap:round;
  stroke-linejoin:round;
  cursor:pointer;
  transition: all ease-in-out 0.3s;
}
.icon:hover{
  transform: scale(1.1);
}
</style>
