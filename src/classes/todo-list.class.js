import { Todo } from "./todo.class";


export class TodoList{

    constructor(){

        //this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter( todo => todo.id !=id);
        this.guardarLocalStorage();

    }

    marcarCompletado(id){

        for( const todo of this.todos) {
            console.log(id, todo.id)

            if(todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados(){
        
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();

        console.log('JULIOOOO',this.todos);

    }



    guardarLocalStorage(){

        localStorage.setItem('todo',JSON.stringify(this.todos));
        

    }

    cargarLocalStorage(){

        this.todos = localStorage.getItem('todo')
                         ? JSON.parse(localStorage.getItem('todo'))
                         : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));
        
        
        const ovejas = [
            { name: 'Noa', color: 'azul' },
            { name: 'Euge', color: 'rojo' },
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo'}
          ]
        
          const ovejasFiltradas = ovejas.filter( todo => todo.color =='rojo' && todo.name.includes('a') && todo.name.includes('a'));
        console.log(ovejasFiltradas)

    }
}