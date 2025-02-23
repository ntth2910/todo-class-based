import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="col-12">
        <h2 className="bg-primary text-white text-center p2">
          The To Do List , {this.props.name}
        </h2>
      </div>
    );
  }
}

export default Navbar;
