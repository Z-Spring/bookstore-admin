<script setup>

</script>

<template>
  <div id="register-form">
    <h2 class="register-text">注册页面</h2>
    <form action="/api/v1/register" method="post">
      <input type="text" name="name"><br>
      <input type="password" name="password"><br>
      <button class="register-btn" type="submit">Register</button>
    </form>
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

#register-form {
  width: 300px;
  margin: 0 auto;
  align-items: center;
  margin-top: 20%;
}

.register-btn {
  width: 206px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #42b983;
  color: #fff;
  align-items: center;
}

.register-text {
  font-size: 20px;
  color: #42b983;
  margin-left: 50px;
}
</style>
