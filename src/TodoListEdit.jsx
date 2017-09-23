import React, { Component } from "react";

class TodoListEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: "",
      todoPriority: 1
    };

    this.handleTodoTextChange = this.handleTodoTextChange.bind(this);

    this.handleTodoPriority = this.handleTodoPriority.bind(this);

    this.handleSave = this.handleSave.bind(this);
  }

  handleTodoTextChange(event) {
    this.setState({ todoText: event.target.value });
  }

  handleTodoPriority(event) {
    this.setState({ todoPriority: event.target.value });
  }

  handleSave(event) {
    console.log(this.state.todoText + this.state.todoPriority);
    event.preventDefault();
  }

  render() {
    return (
      <div className="col-md-8">
        <div className="panel panel-default">
          <div className="panel-heading">Add New Todo</div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="usr">Description</label>
                <textarea
                  name="todo"
                  type="text"
                  className="update-todo-text form-control"
                  value={this.state.todoText}
                  onChange={this.handleTodoTextChange}
                />
              </div>
              <div className="form-group">
                <label>Due Date</label>
                <input
                  name="date"
                  type="date"
                  className="update-todo-date form-control"
                  value={this.state.date}
                  onChange={this.handleDate}
                />
                <label>How much of a priority is this?</label>
                <select
                  className="update-todo-priority form-control"
                  name="priority"
                  value={this.state.todoPriority}
                  onChange={this.handleTodoPriority}
                >
                  <option value="1">Medium Priority</option>
                  <option value="2">A lot of Priority</option>
                  <option value="3">Urgent</option>
                </select>
              </div>
            </form>
            <div className="form-group">
              <button
                onClick={this.handleSave}
                type="submit"
                name="submit"
                className="update-todo btn btn-success btn-block"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoListEdit;
