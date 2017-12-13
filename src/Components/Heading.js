import React, { Component } from 'react';

class Heading extends Component {
  render() {
    return (
      <div className="Heading">
        <h1>Text Changer Made By {this.props.to} With the help of {this.props.from}</h1> 
      </div>
    );
  }
}

export default Heading;
