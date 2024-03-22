<template>
  <h1>Homepage</h1>
  <p>This is the home page</p>
  <button @click="fetchData()">Api call</button>
  <div v-if="arr.length > 0">
      <h2>Products:</h2>
      <ul>
        <li v-for="(product, index) in arr" :key="index">{{ product.id}} {{"   "}}{{product.title}}</li>
      </ul>
    </div>
    <!-- <div v-else>
      <p>No products found.</p>
    </div> -->
</template>

<script>
import axios from "axios";
export default {
  name: "Homepage",
  data() {
    return {
      arr: [],
    };
  },

  methods: {
    fetchData() {
      axios.get('https://dummyjson.com/products')
        .then(response => {
          this.arr=response.data.products;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>