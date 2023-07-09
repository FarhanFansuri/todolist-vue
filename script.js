const app = Vue.createApp({
    data() {
        return {
            nama: "farhan",
            todo: [],
            text: "",
            cons: true
        }
    },
    methods: {
        add(event) {
            this.text = event.target.value
        },
        push(event) {
            this.todo.push(this.text)
        }
    },

})

app.mount('.app')