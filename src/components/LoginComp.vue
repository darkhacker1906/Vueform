<template>
  <div class="main_div">
    <h1>Input form</h1>
    <div>
      <form @submit.prevent="handleSubmit()">
        <v-text-field
          type="text"
          label="Name"
          v-model="name"
          required
        ></v-text-field>
        <v-text-field
          type="text"
          label="Email"
          v-model="email"
          required
        ></v-text-field>
        <v-text-field
          type="password"
          label="Password"
          v-model="password"
          required
        ></v-text-field>
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
      </form>
    </div>
  </div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import {reactive,computed} from 'vue'
export default {
  name: "LoginComp",
 setup(){
    const state=reactive({
        name:"",
        email:"",
        password:"",
    })
 },

 rules : computed(()=>{
   return {
      name: { required },
  email: { required },
  password: { required }
   }
}),
  data(){
    return{
        v$:useVuelidate(),
        name:"",
        email:"",
        password:"",
    }
  },

  methods:{
    handleSubmit(){
      console.log(this.name+ this.email + this.password);
    console.log(this.v$);
    this.v$.$validate()
    if(!this.v$.$error){
        alert("Form submitted successfully");
    }else{
        alert("Form failed validation");
    }
    
    }
  }
};
</script>

<style>
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
}
</style>