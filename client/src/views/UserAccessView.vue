<template>
  <div class="user-form login-form">
    <div class="img-box">
      <img src="landingImg.avif" alt="User Form Hero Image">
    </div>
    <div class="content">
      <div v-if="form" class="form-box">
        <h2>Login</h2>
        <div class="error-section" v-if="error">
          <p class="error-message">There was an error</p>
        </div>
        <form @submit.prevent="logIn">
          <div class="input-box">
            <span>Email</span>
            <input type="email" required v-model="email" min="8">
          </div>
          <div class="input-box">
            <span>Password</span>
            <input type="password" required v-model="password" min="8">
          </div>
          <div class="input-box">
            <button type="submit" v-if="!loading">Log In</button>
            <LoadingCycle v-if="loading" />
          </div>
          <div class="input-box">
            <p>Don't have an Account?
              <span @click="toggleForm" class="toggle-form-btn">Sign up</span>
            </p>
          </div>
        </form>
      </div>
      <div v-else-if="!form" class="form-box">
        <h2>Register</h2>
        <div class="error-section" v-if="error">
          <p class="error-message">There was an error</p>
        </div>
        <form @submit.prevent="register">
          <div class="input-box">
            <span>Display Name</span>
            <input type="test" required v-model="displayName" min="3">
          </div>
          <div class="input-box">
            <span>Email</span>
            <input type="email" required v-model="email" min="8">
          </div>
          <div class="input-box">
            <span>Password</span>
            <input type="password" required v-model="password" min="8">
          </div>
          <div class="input-box">
            <span>Repeat Password</span>
            <input type="password" required v-model="repeatPassword" min="8">
          </div>
          <div class="input-box">
            <button type="submit" v-if="!loading">Register</button>
            <LoadingCycle v-if="loading" />
          </div>
          <div class="input-box">
            <p>Already have an Account?
              <span @click="toggleForm" class="toggle-form-btn">Log In</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import LoadingIcon from '@/components/LoadingIcon.vue';

export default {
  components: {
    LoadingCycle: LoadingIcon,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const form = ref(true);
    const displayName = ref('');
    const email = ref('');
    const password = ref('');
    const repeatPassword = ref('');

    const error = computed(() => store.state.error);
    const loading = computed(() => store.state.loading);

    const toggleForm = () => {
      form.value = !form.value;
    };

    const logIn = async () => {
      const payload = {
        email: email.value,
        password: password.value,
      };
      await store.dispatch('logIn', payload);
      router.push('/home');
    };

    const register = async () => {
      if (password.value === repeatPassword.value) {
        const payload = {
          displayName: displayName.value,
          email: email.value,
          password: password.value,
        };
        store.dispatch('register', payload);
        toggleForm();
      }
    };

    return {
      error,
      email,
      password,
      logIn,
      loading,
      displayName,
      repeatPassword,
      form,
      toggleForm,
      register,
    };
  },
};
</script>

<style scoped>
.user-form{
  position: relative;
  width:100%;
  height:100vh;
  display:flex;
}

.img-box{
  position:relative;
  width:50%;
  height: 100%;
}

.img-box img {
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit: cover;
}

.content{
  display:flex;
  width:50%;
  height:100%;
  justify-content: center;
  align-items:center;
  background:#fff;
}

.error-section{
  background: #f64242;
  color: #fff;
  font-size: 0.9rem;
  height: 2em;
  display:flex;
  justify-content: center;
  align-items:center;
  margin: 0.2rem auto 1rem;
  border-radius:4px;
}

.form-box{
  width:50%;
}

.form-box h2{
  font-weight:600;
  font-size:1.5em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  border-bottom: 3px solid #ff4584;
  display: inline-block;
  letter-spacing: 1px;
  border-radius: 2px;
}

.input-box{
  margin-bottom:1.2rem;
}

.input-box span{
  font-size: 1rem;
  margin-bottom: 5px;
  display: inline-block;
  color: #607db8;
  font-size: 1rem;
  letter-spacing: 1px;
}

.input-box input,
.input-box button {
  width:100%;
  padding: 10px 20px;
  border-radius: 10px;
}

.input-box input{
  outline: none;
  font-weight: 400;
  border: 1px solid #607d8b;
  font-size:1rem;
  letter-spacing: 1px;
  background: transparent;
}
.input-box button{
  background: #ff4584;
  color:#fff;
  outline:none;
  border:none;
  font-size:1rem;
  font-weight: 500;
  cursor:pointer;
  transition: all ease-in-out 0.3s;
}
.input-box button:hover{
  background: #fc2e73;
  letter-spacing: 2px;
}
.toggle-form-btn{
  text-decoration: underline;
  transition: all ease-in-out 0.3s;
  font-weight: 600;
  cursor: pointer;
}
.toggle-form-btn:hover{
  letter-spacing: 2px;
}

@media (max-width: 768px){
  .img-box {
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
  }
  .content{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .content .form-box{
    width: 100%;
    padding: 40px;
    background: rgba(255 255 255 / 0.9);
    margin: 50px;
  }
}

</style>
