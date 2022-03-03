import React, {useState} from 'react'
import Form from './Form'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([])

    const addtodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    

    const checkTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.ischeck = !todo.ischeck
            }
            return todo
        })
        setTodos(updateTodos);
    }

    return (
        <div>
            <h1>To-do List</h1>
            <Form onSubmit={addtodo}/>
            <Todo 
                todos={todos}
                checkTodo={checkTodo}
                removeTodo={removeTodo} updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList