import {ADD_TODO, TODO_COMPLETE} from '../actions/todoActions'

const todoReducer = (state, action) => {
    
    switch(action.type){
        case ADD_TODO:
            
            return[...state, action.payload] ;
            
        case TODO_COMPLETE:
            return state.map(item => {
                if(item.id === action.payload.id){
                    return {...item, complete: !item.complete}
                }else{return item}
            });
        default:
            return state; 
    }
}

export default todoReducer;