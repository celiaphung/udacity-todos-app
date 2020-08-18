import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO
} from '../Actions/Todos';
import { RECEIVE_DATA } from '../Actions/Shared';

export default function todos(state = [], action) {
    //1. Only an event can change the state of the store
    //2. The function that returns the new state needs to be a pure function -> Reducer
    //Pure function: Returns same result if same arguments are passed in; Depends solely on the arguments passed in; Does not produce side effects
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO:
            return state.map((todo) => todo.id !== action.id ? todo :
                Object.assign({}, todo, { complete: !todo.complete }))
        case RECEIVE_DATA:
            return action.todos
        //Can't modify the original object (To be pure) -> Use Object.assign to create a new object 
        //then merge all the properties on todo (todo object) to that object except for complete
        default:
            return state
    }
}