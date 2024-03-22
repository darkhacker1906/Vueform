import { createStore } from "vuex";
import axios from "axios";
export default createStore({
    state:{
        name:"code Improve",
        mainTitle:'*** No Title****',
        id:100,
        dataFromApi:null,
    },
    mutations:{
      setNewName(state,payload){
        state.name=payload.name
      },
      setDataFromApi(state,payload){
        state.dataFromApi=payload
      }
    },
    actions:{
        newName(context,payload){
        context.commit('setNewName',payload)
        },
        async fetchDataFromApi({ commit }) {
            try {
              const response = await axios.get('https://dummyjson.com/products');
              console.log(response);
              commit('setDataFromApi', response.data.products);
            } catch (error) {
              console.error('Error fetching data from API:', error);
            }
          },
    }
})