import API from 'goals-todos-api';

export const RECEIVE_DATA = 'RECEIVE_DATA'

//Non-asynchronous action creators
function receiveData(todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals,
    }
}

//Thunk action creators - asynchronous action creators
//return a function instead of object (dispatch function)
export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([todos, goals]) => {
            dispatch(receiveData(todos, goals))
        })
    }
}