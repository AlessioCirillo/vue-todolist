
const app = new Vue({

    el: '#app',

    data: {

        list: [
            'Fare la spesa',
            'Fare i compiti',
            'Fare il bucato',
        ],

        newTodo: '',  

        zeroTodo: '',
    
    },

    methods:{
        addTodo(){
            if( this.newTodo.trim() !== '' ){
                this.list.push(this.newTodo)
                this.newTodo = ''                   
            };
        },

        removeTodo(index){
            this.list.splice(index, 1); 
        },

        noTodo(){
            if(this.list.length < 0){
                this.zeroTodo = 'non ci sono Todo';
            }
        }
    }
});
