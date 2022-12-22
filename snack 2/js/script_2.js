const {createApp} = Vue

createApp({
    data(){
        return{
            userList : [],
            userName : '',
            isGuestInviter : false,
    }
},
    methods :{
        checkName (name) {
            this.isGuestInviter = this.userList.includes(name)
        }
    },

    mounted(){

        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
            .then((response) =>{
                console.log(response.data.response)
                const result = response.data.response;
                this.userList.push(result)

        });
    }
    },



       
           

               

    created(){
      
    }
   
              
}).mount('#app')