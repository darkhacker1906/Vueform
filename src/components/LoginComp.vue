<template>
  <div class="main_div">
    <h1>Input form</h1>
       <!-- <p>{{$store.state.name}}</p> -->
       <!-- <button @click="handleClick">Change name</button> -->
    <div>
      <form @submit.prevent="handleSubmit()">
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
            <div class="loader" > <v-progress-circular v-if="loading" indeterminate color="white" ></v-progress-circular></div>
          </v-btn>
        </div>
        <div class="m_b">
          Not registered <router-link to="/signup">Sign up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export default {
  name: "LoginComp",
  data() {
    return {
      email: "",
      password: "",
      loading:false,
    };
  },

  methods: {
    async handleSubmit() {
      try {
        this.loading = true; 
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/homepage");
      } catch (error) {
        console.error("Authentication failed:", error.message);
      } finally {
        this.loading = false; 
      }
    },
    handleClick(){
      // this.$store.commit('setNewName','Abhinandan@123')
      // this.$store.state.name="Hello Everyone"
      //Action--------------------
      this.$store.dispatch({
        type:'newName', name:"New again database"
      })
    }
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
  margin-top: 30px;
  margin-bottom: 10px;
}
.btn_div {
  display: flex;
  justify-content: center;
  position: relative;
}
.loader{
  position: absolute;
}
.m_b{
  margin-top:10px;
}
</style>
