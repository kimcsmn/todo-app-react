import React, { Component } from 'react'

class AddForm extends Component {
  
  state = (
    {
      title: ''
    }
  )

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState(
      {title: ''}
    )
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState(
      {
        title: e.target.value
      }
    )
  }


  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Add todo: </label>
        <input type="text" onChange={this.handleChange} value={this.state.title} />
      </form>
      </div>
    )
  }
}

export default AddForm
