import {ADD_TODO, TODO_COMPLETE} from '../actions/todoActions'

const todoReducer = (state, action) => {
    
    switch(action.type){
        case ADD_TODO:
            console.log(state);
            return[...state, action.payload] ;
            
        case TODO_COMPLETE:
            return[...state, !action.payload.completed];
        default:
            return state; 
    }
}

export default todoReducer;