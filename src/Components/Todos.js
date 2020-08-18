import React from 'react';
import { handleDeleteTodo, handleToggleTodo, handleAddTodo } from '../Actions/Todos';
import { connect } from 'react-redux';
import List from './List';

class Todos extends React.Component {
    //Not doing optimistic updates bc the id is being generated on the server
    addItem = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddTodo(
            this.input.value,
            () => this.input.value = ''
        ))
    }

    //Optimistic Updates - delete item first while the request is asychronous then send error feedback if there's any
    //Check Optimisitc Updates commit on github
    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo))
    }

    toggleItem = (id) => {
        this.props.dispatch(handleToggleTodo(id))
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type='text'
                    placeholder='Add Todo'
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>Add Todo</button>
                <List
                    items={this.props.todos}
                    remove={this.removeItem}
                    toggle={this.toggleItem}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    todos: state.todos
}))(Todos)
