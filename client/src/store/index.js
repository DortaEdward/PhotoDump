import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    loading: false,
    error: null,
  },
  actions: {
    async logIn({ state }, payload) {
      state.loading = true;
      state.error = null;
      try {
        console.log(payload, state);
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
        }
      } catch (error) {
        state.error = error.message;
      }
      state.loading = false;
    },
  },
  modules: {
  },
});
