<script setup >
// import BookInfo from './components/BookInfo.vue';
import router from './router'
import Upload from './components/Upload.vue'
import axios from 'axios'


/* alert(name)
alert(auth) */


function getBooksById() {
  // 获取cookie,并用split()分割字符串，返回string[]
  let Authorization = document.cookie.split(";")[0].split("=")[1]
  if (Authorization == undefined) {
    Authorization = ""
  }
  // alert(Authorization)
  const option = {
    url: "/api/v1/books/1",
    method: 'get',
    headers: {
      Authorization: Authorization
    }
  }

  axios(option).then((response) => {
    /* router.push({
      path : "/base",
    }) */
    console.log(response.data)
    /*  localStorage.setItem("token", response.data.jwt)
     localStorage.setItem("token2", JSON.stringify(response.data)) */
  }).catch((error) => {
    // 使用路由跳转页面
    alert("请登录后查看", router.push({
      path: "/base/login"
    }))
    // alert(error.response.data.error)
    console.log(error.response.data.error)
  });
}

</script>

<template>
  <BookInfo />
  <button @click="getBooksById">获取书籍信息</button>
  <!-- <Upload /> -->
</template>

<style >
body {
  background-color: papayawhip;
}
</style>
