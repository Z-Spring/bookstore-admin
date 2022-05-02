<script setup>

</script>

<template>
<div style="border:1px solid ;position: fixed;height:500px; right: 400px; color:darksalmon;"></div><!--这个div模拟垂直分割线-->
  <div id="login-form">
    <h2 class="login-text">登录页面</h2>
    <form action="/api/v1/login" method="post">
      <input type="text" name="name"><br>
      <input type="password" name="password"><br>
      <button class="login-btn" type="submit">login</button>
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

