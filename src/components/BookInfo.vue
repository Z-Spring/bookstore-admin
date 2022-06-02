<script setup>
import axios from 'axios'
import { ref } from 'vue'


let Data = ref({
  books: []
})
function getAllBooks() {
  axios.get('/books')
    .then(response => {
      Data.value.books = response.data
      console.log(Data)
    })
    .catch(error => {
      console.log(error)
    })
}
getAllBooks()

console.log(Data)
</script>

<template>
  <!-- TODO: bookstore 艺术字体 -->
  <router-link to="/base">
    Bookstore
  </router-link>
  <div class="router_view">
    <router-view></router-view>
  </div>
  <div class="book">
    <div id="book_info" v-for="book in Data.books.data">
      <div class="book_image">
        <img :src="book.image_path" width="180" height="230">
      </div>
      <div class="book_name">
        {{ book.name }}
      </div>
      <div class="book_price">
        ￥{{ book.price }}
      </div>
    </div>
  </div>

</template>

<style scoped>
.book {
  display: block;
  top: auto;
  height: 10em;
}

book_name {
  color: red;
  font-weight: 100;
}

.book_price {
  color: red;
  font-weight: 900;
}

.book_image {
  flex: 1;
  align-items: center;
  /* display: flex; */
}

#book_info {
  float: left;
  width: 180px;
  height: 230px;
  margin-left: 15px;
  margin-top: 30px;
}

.navigate {
  float: right;
  display: flex;
  flex: 1;
  margin-top: -52px;
  left: 2em;
}

.header_text {
  width: 500px;
}

a {
  text-decoration-line: none;
  color: rebeccapurple;
}
</style>

