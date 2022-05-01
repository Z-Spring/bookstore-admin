<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'


let Data = ref({
  books: []
})
function getAllBooks() {
  axios.get('/api/v1/books')
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
  <div>
    <h2 >Bookstore</h2>
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
.book_name {
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
  /* display: flex; */
  width: 180px;
  height: 230px;
  margin-left: 15px;
}
</style>
