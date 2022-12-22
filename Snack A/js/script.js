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
            this.messages.push({ message: 'Ok!', status: 'received' })
        },

        clearInput: function () {
            this.newMessage = "";
        },


        },




}).mount('#app')
