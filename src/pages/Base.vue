<script setup lang="ts">
import { ref } from 'vue';

const login = ref("登录")
const register = ref("注册")
let cookie = document.cookie
let login_name = cookie?.split(";")[1]?.split("=")[1]
console.log(login_name);

if (login_name != "" && login_name != undefined) {
  login.value = login_name
}
else {
  login_name = ""
}

</script>

<template>

  <!-- </div> -->
  <div class="router_link">
    <router-link v-if="login == '登录'" :to="{
      name: 'login'
    }"> {{ login }}/
    </router-link>

    <span v-if="login != '登录'">{{ login }}</span>

    <router-link v-if="login == '登录'"  :to="{
      name: 'register'
    }">{{ register }}
    </router-link>
    
  </div>
  <KeepAlive>
  <router-view></router-view>

  </KeepAlive>
</template>

<style scoped>
.router_link {
  float: right;
  margin-top: -20px;
}

.router_view {
  display: flex;
  float: right;
}
</style>
