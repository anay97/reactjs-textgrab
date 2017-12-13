import React, { Component } from 'react';
//import './App.css';
import Heading from './Components/Heading';
import NumberField from './Components/NumberField';
import Paras from './Components/Paras';
import $ from 'jquery';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            num:1,
            paras:''
        }
    }
    getText(){
        $.ajax({
            url:'https://baconipsum.com/api/?type=all-meat&format=text&paras='+this.state.num,
            dataType:'text',
            cache:false,
            success:function(data){
                this.setState({paras:data},function(){
                });
            }.bind(this),
            error:function(xhr,status,err){
                console.log(err);
            }
        });
    }
    componentWillMount(){
        this.getText();
    }
    componentDidMount(){
        this.getText();
    }
    changeParas(newNumber){
        this.setState({num:newNumber},this.getText);
    }
  render() {
    return (
      <div className="App">
        <Heading to="Ali" from="Anay" />
        <NumberField currentVal={this.state.num} changeVal={this.changeParas.bind(this)} /><br />
        <Paras txt={this.state.paras} />
      </div>
    );
  }
}

export default App;
