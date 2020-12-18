import React from 'react'

const Todo = ({todos, deleteTodo}) => {
  // check if todos are empty
  // if not, return a jsx template of each todo
  const todoList = todos.length ? (
    todos.map(todo => {
      return(
        <div key={todo.id}>
          <p>{todo.title}</p>
          <button onClick={() => {deleteTodo(todo.id)}}>Delete Todo</button>
        </div>
      )
    })
  ) : (
    <p>List is empty</p>
  )
  return(
    <div>
      {todoList}
    </div>
  )
}

export default Todo
