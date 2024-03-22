<template>
  <div class="main_div">
    <h1>Signup</h1>
    <div>
      <form @submit.prevent="handleSubmit()">
        <p>
          <v-text-field
            type="text"
            label="Name"
            v-model="name"
            required
          ></v-text-field>
        </p>
        <p>
          <v-text-field
            type="text"
            label="Email"
            v-model="email"
            required
          ></v-text-field>
        </p>
        <p>
          <v-text-field
            type="password"
            label="Password"
            v-model="password"
            required
          ></v-text-field>
        </p>
        <p>
          <v-text-field
            type="password"
            label="Confirm Password"
            v-model="confirm_password"
            required
          ></v-text-field>
        </p>
        <div class="btn_div">
          <v-btn
            class="submit_btn"
            variant="outlined"
            elevated
            type="submit"
            style="
              background-color: #008cba;
              border: none;
              color: white;
              font-weight: bold;
              width: 100%;
            "
          >
            Submit
          </v-btn>
        </div>
        <div>Not registered <router-link to="/">Sign in</router-link></div>
      </form>
    </div>
  </div>
</template>
<script>
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase'
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm_password:"",
    };
  },

  methods: {
   async handleSubmit() {
    try{
        createUserWithEmailAndPassword(auth,this.email,this.password)
        this.$router.push("/");
    }catch(e){
     console.warn(e,"Something error has happened");
    }
    },
  },
};
</script>

<style scoped>
.main_div {
  min-width: 300px;
  width: 45%;
  margin: auto;
  padding: 20px 20px 30px 20px;
  background-color: #fff;
  border-radius: 15px;
}

h1 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.btn_div {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>