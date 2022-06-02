<script setup>
import axios from 'axios'
import { ref } from 'vue'
import router from '../router';

const name = ref("")
const password = ref("")

function login() {
  const option = {
    url: "/auth",
    method: "post",
    data: {
      // name: name.value,
      name: name.value,
      password: password.value
    }
  }

  axios(option)
    .then((resp) => {
      location.href = "/base"
      console.log(resp.data);
    })
    .catch(error => {
      console.log(error);
    })
}
</script>

<template>
  <div style="border:1px solid ;position: fixed;height:500px; right: 400px; color:darksalmon;"></div>
  <div id="login-form">
    <h2 class="login-text">登录页面</h2>
    <input type="text" placeholder="name" v-model="name"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button class="login-btn" @click="login">click me</button>
  </div>
</template>

<style scoped>
body {
  background-color: papayawhip;
}



input {
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

#login-form {
  width: 250px;
  margin: 0 0;
  position: fixed;
  right: 30px;
  margin-top: 5%;
}

.login-btn {
  width: 206px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #42b983;
  color: #fff;
  align-items: center;
}

.login-text {
  font-size: 20px;
  color: #42b983;
  margin-left: 50px;
}
</style>

