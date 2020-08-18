import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

//Non-asynchronous action creators
function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}
function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}
function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

//Thunk action creators - asynchronous action creators
//return a function instead of object (dispatch function)
export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodo(todo.id))

        return API.deleteTodo(todo.id)
            //Catch an error and return a feedback to the user
            .catch(() => {
                dispatch(addTodo(todo))
                alert('An error occurred. Try again.')
            })
    }
}

export function handleAddTodo(name, cb) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodo(todo))
                cb()
            })
            .catch(() => {
                alert('There was an error. Try again.')
            })
    }
}

export function handleToggleTodo(id) {
    return (dispatch) => {
        dispatch(toggleTodo(id))

        return API.saveTodoToggle(id)
            .catch(() => {
                dispatch(toggleTodo(id))
                alert('An erorr occurred. Try again.')
            })
    }
}