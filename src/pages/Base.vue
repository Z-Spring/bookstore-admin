<script setup lang="ts">


</script>

<template>
  <!-- <div> -->
  
  <!-- </div> -->
  <div class="router_link">
    <router-link :to="{
      name: 'login'
    }">登录/
    </router-link>
    <router-link :to="{
      name: 'register'
    }">注册
    </router-link>
  </div>
  <router-view></router-view>
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
