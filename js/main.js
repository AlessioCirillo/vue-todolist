
const app = new Vue({

    el: '#app',

    data: {
        list: [
            'Fare la spesa',
            'Fare i compiti',
            'Fare il bucato',
        ],
        newTodo: null,
    },

    methods:{
        addTodo(){
            if( this.newTodo !== ''){
                this.list.push(this.newTodo);
            }
        }
    }
});