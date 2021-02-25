/* eslint-disable import/no-anonymous-default-export */
export const ADD_TODO = "ADD_TODO";
export const TODO_COMPLETE = "TODO_COMPLETE";


export default {
    addTodo: (todo) => {
        const constructTodo = {item: todo, complete: false, id: Date.now}
        return { type: ADD_TODO, payload: constructTodo };
    },
    todoComplete: (todo) => {
        const completedTodo = {item: todo, completed: false, id: Date.now}
        return {type: TODO_COMPLETE, payload: completedTodo}
    }
}