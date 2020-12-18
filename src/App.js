import React, { Component } from 'react'
import AddForm from './AddForm'
import Todo from './Todo'

class App extends Component {

  state = (
    {
      todos: [
        {title: 'eat the rich', id: 0,},
        {title: 'walk the dog', id: 1,}
      ]
    }
  )

  deleteTodo = (id) => {
    // delete the todo that matched the passed in id from todo component
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState(
      {
        todos: todos,
      }
      )

    }

    addTodo = (todo) => {
      // assign an id for the todo
      todo.id = Math.random()
      const todos = [...this.state.todos, todo]
      this.setState(
        {
          todos: todos
      }
    )
  }

  render(){
    return(
      <div>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App
