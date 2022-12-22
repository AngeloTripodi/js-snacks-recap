const {createApp} = Vue

createApp({
    data(){
        return{
            evenNumbers : [],
            oddsNumbers : [],
    }
},
    methods :{

        getNewNumber(){
            axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=1')
        .then((response) =>{
           
            const result = response.data.response;
            console.log(result[0])
            
                if (result %2 == 0){
                    this.evenNumbers.push(result[0])
                } else {
                        this.oddsNumbers.push(result[0])
                    }
           
        })
        },

    },

    created(){
        
    }

   
              
}).mount('#app')