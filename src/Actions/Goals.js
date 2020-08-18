import API from 'goals-todos-api';


//export them so that we can import them into reducer folders
export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

//Non-asynchronous action creators
function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}
function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id
    }
}

//Thunk action creators - asynchronous action creators
//return a function instead of object (dispatch function)
//export them to import into other files
export function handleAddGoal(name, cb) {
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoal(goal))
                cb() //callback function
            })
            .catch(() => {
                alert('There was an error. Try again.')
            })
    }
}

export function handleDeleteGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id))

        return API.deleteGoal(goal.id)
            .catch(() => {
                dispatch(addGoal(goal))
                alert('An error occurred. Try again.')
            })
    }
}