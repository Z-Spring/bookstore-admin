<script setup>
  import axios from 'axios'

  function get(){
    axios.get('/api/v1/books').then(resp=>{
      console.log(resp.data)
    }), err=>{
      console.log(err.message,"sdfasd")
    }
  }
</script>

<template>
  <div id="login-form">
    <h2 class="login-text">登录页面</h2>
    <form action="/api/v1/login" method="post">
      <input type="text" name="name"><br>
      <input type="password" name="password"><br>
      <button class="login-btn" type="submit" >login</button>
    </form>
  </div>
  
</template>

<style scoped>
  body{
    background-color: papayawhip;
  }
  input{
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  #login-form{
    width: 300px;
    margin: 0 auto;
    align-items: center;
    margin-top: 20%;
  }
  .login-btn{
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    background-color: #42b983;
    color: #fff;
    align-items: center;
  }
  .login-text{
    font-size: 20px;
    color: #42b983;
    margin-left: 50px ;
  }
</style>

