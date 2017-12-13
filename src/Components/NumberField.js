import React, { Component } from 'react';

class NumberField extends Component {
    constructor(props){
        super(props);
    }
    changer(){
        let x=this.refs.mytxt.value;
        this.props.changeVal(x);
    }
  render() {
    return (
      <div className="NumberField">
        <input ref="mytxt" type="number" value={this.props.currentVal} onChange={this.changer.bind(this)} />
      </div>
    );
  }
}

export default NumberField;
