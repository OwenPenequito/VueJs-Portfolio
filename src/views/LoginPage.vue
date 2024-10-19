<template>
  <div class="login-text">
  <h1>Self Portfolio</h1>
  <p>"Welcome to the portfolio login page. Please enter your credentials to access exclusive projects, updates, and insights into my work. <br> 
    Secure access ensures that only you can explore personalized features and stay connected with my latest creations."</p>
  </div>

  <!--The container for login form-->
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="validateLogin"> <!--Prevents the user from logging in -->
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    //This method is used to validate if the user inputs the hardcoded username and password
    validateLogin() {
      const hardcodedUser = 'owenj';
      const hardcodedPassword = 'password123';

      if (this.username === hardcodedUser && this.password === hardcodedPassword) {
        this.$router.push('/portfolio/profile');
      } else {
        this.error = 'Invalid username or password.';
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 100px auto;
  padding: 20px;
  background-color: #f9f9f95f;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

input[type="text"], 
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-top: 10px;
}
.login-text {
  color: white;
}
</style>
