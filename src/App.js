import React, { Component } from "react";
import Navbar from "./components/Navbar";
import TodoRows from "./components/TodoRows";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { action: "Buy milk", done: false },
        { action: "do laundry", done: false },
        { action: "go to the gym", done: false },
      ],
      userName: "Ha",
      newTodo: "",
    };
  }

  todoRows = () =>
    this.state.todos.map((todo) => (
      <TodoRows item={todo} key={todo.action} callback={this.toggleComplete} />
    ));

  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { action: this.state.newTodo, done: false }],
      newTodo: "",
    });
  };
  toggleComplete = (todo) => {
    this.setState({
      todos: this.state.todos.map((item) =>
        item.action === todo.action ? { ...item, done: !todo.done } : item
      ),
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar name={this.state.userName} />

          <div className="col-12">
            <input
              className="form-control"
              value={this.state.newTodo}
              name="newTodo"
              onChange={this.updateValue}
            />
            <button className="btn btn-primary" onClick={this.addTodo}>
              Add
            </button>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.todoRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
