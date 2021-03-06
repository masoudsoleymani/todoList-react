import React from 'react';


const Todo =({text, todo, todos, setTodos}) => {

    const deleteHandeler = () => {
        setTodos(todos.filter(e => e.id !== todo.id));
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, 
                    completed: !item.completed,
                };
            }
            return item;
        } ));
    };
    return (
        <section className="todo">
            <button 
            onClick={completeHandler} 
            className="complete-btn">
                <i className = {` ${todo.completed ? "fas fa-check" : ""}`}></i>
            </button>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button 
            onClick={deleteHandeler} 
            className="trash-btn">
                <i className = "fas fa-trash"></i>
            </button>
        </section>

    )
};

export default Todo;