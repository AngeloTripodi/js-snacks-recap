const { createApp } = Vue

createApp({
    data() {
        return {
            newMessage: "",
            messages: []


        }
    },
    methods: {

        addMessageOnChat: function (element) {
            if (element != "") {
                this.messages.push({ message: element, status: 'sent' }),

                    setTimeout(this.reply, 1000);

                this.clearInput();
            }

        },

        reply: function () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then((response) =>{
                console.log(response.data.response)
                const result = response.data.response;
                this.messages.push({ message: result, status: 'received' })
        });
        },

        clearInput: function () {
            this.newMessage = "";
        },


        },
        mounted(){

        }




}).mount('#app')
