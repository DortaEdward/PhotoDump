import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    loading: false,
    error: null,
  },
  actions: {
    setError({ state }, error) {
      state.error = error;
    },
    async logIn({ state }, payload) {
      state.loading = true;
      state.error = null;
      try {
        const { data } = await axios.post('http://localhost:5000/api/v1/auth/login', payload);
        if (data.status === 200 && data.token) {
          localStorage.setItem('token', data.token);
        }
      } catch (error) {
        console.log(error.message);
        state.error = error.message;
      }
      state.loading = false;
    },
    async getUserData({ state }) {
      state.loading = true;
      state.error = null;
      try {
        const token = localStorage.getItem('token');
        const config = { headers: { authorization: `Bearer ${token}` } };
        const { data } = await axios.get('http://localhost:5000/api/v1/user', config);
        if (data.status === 200 && data.user) {
          state.user = data.user;
          console.log(state.user);
        }
      } catch (error) {
        state.error = error.message;
      }
      state.loading = false;
    },
    async register({ state }, payload) {
      state.loading = true;
      state.error = null;
      try {
        const { data } = await axios.post('http://localhost:5000/api/v1/auth/register', payload);
        if (data.status === 200) {
          state.loading = false;
          return true;
        }
      } catch (error) {
        state.loading = false;
        state.error = error.message;
      }
      return false;
    },
  },
  modules: {
  },
});
