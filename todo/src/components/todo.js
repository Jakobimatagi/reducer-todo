import React from "react";
import { useState, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";
// import styled from 'styled-components'
import actions from "../actions/todoActions";

const Todo = () => {
  const initialState = [];
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [newTodoText, setTodoText] = useState("");
  const handleChanges = (e) => {
    setTodoText(e.target.value);
  };
  console.log(state);
  return (
     
    <div>
      <h1>Add a Todo</h1>
      <input
        type="text"
        name="newTodoText"
        value={newTodoText}
        onChange={handleChanges}
      />
      <button onClick={() => dispatch(actions.addTodo(newTodoText))}>
        Add Todo
      </button>

      <div className="todoList">
        <h2>Todo List</h2>
        <h3 >
          {state.map((e) => {
              
            return (
                
                <div onClick={() => dispatch(actions.todoComplete(e))} className={e.completed ? 'lineThrough' : 'noLine'}>
                {e.item}
                <button onClick={() => dispatch(actions.removeTodo(e))}>Remove</button>
                </div>
                );
          })}
        </h3>
      </div>

      
    </div>
    
  );
};
export default Todo;