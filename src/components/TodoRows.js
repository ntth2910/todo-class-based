import React, { Component } from "react";

class TodoRows extends Component {
  render() {
    return (
      <tr key={this.props.item.action}>
        <td>{this.props.item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={this.props.item.done}
            onChange={() => {
              this.props.callback(this.props.item);
            }}
          />
        </td>
      </tr>
    );
  }
}

export default TodoRows;
