import React, { Component } from 'react'
class simplecalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: 0,
      num: 0,
      temp: 0,
      result: 0,
      operation: ''
    }
  }

  Addition = () => {
    let operType = "+";
    this.setState({ operation: operType });
    let tempvalue = 0;
    let result = this.state.num;
    this.setState({ result: result });
    this.setState({ num: tempvalue });
  }
  Substraction = () => {
    let operType = "-";
    this.setState({ operation: operType });
    let tempvalue = 0;
    let result = this.state.num;
    this.setState({ result: result });
    this.setState({ num: tempvalue });
  }
  Multiplication = () => {
    let operType = "*";
    this.setState({ operation: operType });
    let tempvalue = 0;
    let result = this.state.num;
    this.setState({ result: result });
    this.setState({ num: tempvalue });
  }
  Division = () => {
    let operType = "/";
    this.setState({ operation: operType });
    let tempvalue = 0;
    let result = this.state.num;
    this.setState({ result: result });
    this.setState({ num: tempvalue });
  }
  Result = () => {
    if (this.state.operation == '+') {
      let result = parseInt(this.state.result) + parseInt(this.state.num);
      this.setState({ num: result });
    }
    if (this.state.operation == "-") {
      let result = parseInt(this.state.result) - parseInt(this.state.num);
      this.setState({ num: result });
    }
    if (this.state.operation == "*") {
      let result = parseInt(this.state.result) * parseInt(this.state.num);
      this.setState({ num: result });
    }
    if (this.state.operation == "/") {
      let result = parseInt(this.state.result) / parseInt(this.state.num);
      this.setState({ num: result });
    }
    if (this.state.operation == "/") {
      let result = parseInt(this.state.result) / parseInt(this.state.num);
      this.setState({ num: result });
    }
  }
  reset = () => {
    let operType = "C";
    this.setState({ operation: operType });
    let tempvalue = 0;
    let result = this.state.result;
    this.setState({ result: result });
    this.setState({ num: tempvalue });
  }
  event1 = () => {
    var tempvalue = parseInt(this.state.num) * 10 + 1;
    this.setState({ num: tempvalue });
  }
  event2 = () => {
    var tempvalue = parseInt(this.state.num) * 10 + 2;
    this.setState({ num: tempvalue });
  }
  event3 = () => {
    var tempvalue = parseInt(this.state.num) * 10 + 3;
    this.setState({ num: tempvalue });
  }
  event4 = () => {
    var tempvalue = parseInt(this.state.num) * 10 + 4;
    this.setState({ num: tempvalue });
  }
  event5 = () => {
    var tempvalue = parseInt(this.state.num) * 10 + 5;
    this.setState({ num: tempvalue });
  }
  event6 = () => {
    var tempvalue = parseInt(this.state.num) * 10 + 6;
    this.setState({ num: tempvalue });
  }
  event7 = () => {
    var tempvalue = parseInt(this.state.num) * 10 + 7;
    this.setState({ num: tempvalue });
  }
  event8 = () => {
    var tempvalue = parseInt(this.state.num) * 10 + 8;
    this.setState({ num: tempvalue });
  }
  event9 = () => {
    var tempvalue = parseInt(this.state.num) * 10 + 9;
    this.setState({ num: tempvalue });
  }
  event10 = () => {
    var tempvalue = parseInt(this.state.num) * 10;
    this.setState({ num: tempvalue });
  }

  render() {
    return (
      <div className="main-group">
        <h3>Standard</h3>
        <input type="text" classname="txtNumber" value={this.state.num} style={{ width: 292, height: 55 }} />
        <div className="firstrow" >
          <input type="button" value="+" style={{ width: 73, height: 55 }}
            onClick={this.Addition.bind(this)} />
          <input type="button" value="-" style={{ width: 73, height: 55 }}
            onClick={this.Substraction.bind(this)} />
          <input type="button" value="*" style={{ width: 73, height: 55 }}
            onClick={this.Multiplication.bind(this)} />
          <input type="button" value="/" style={{ width: 73, height: 55 }}
            onClick={this.Division.bind(this)} />
        </div>
        <div className="secondrow">
          <input type="button" style={{ width: 73, height: 55 }} value="1"
            name="num"
            onClick={this.event1.bind(this)} />
          <input type="button" value="2" style={{ width: 73, height: 55 }}
            name="num"
            onClick={this.event2.bind(this)} />
          <input type="button" value="3" style={{ width: 73, height: 55 }}
            name="num"
            onClick={this.event3.bind(this)} />
          <input type="button" value="4" style={{ width: 73, height: 55 }}
            name="num"
            onClick={this.event4.bind(this)} />
        </div>
        <div className="thirdrow">


          <input type="button" value="5" style={{ width: 73, height: 55 }}
            name="num"
            onClick={this.event5.bind(this)} />
          <input type="button" value="6" style={{ width: 73, height: 55 }}
            name="num"
            onClick={this.event6.bind(this)} />
          <input type="button" value="7" style={{ width: 73, height: 55 }}
            name="num"
            onClick={this.event7.bind(this)} />
          <input type="button" value="8" style={{ width: 73, height: 55 }}
            name="num"
            onClick={this.event8.bind(this)} />
        </div>
        <div className="fourthrow">


          <input type="button" value="9" style={{ width: 73, height: 55 }}
            name="num"
            onClick={this.event9.bind(this)} />
          <input type="button" value="0" style={{ width: 73, height: 55 }}
            name="num"
            onClick={this.event10.bind(this)} />

          <input type="button" value="=" style={{ width: 73, height: 55 }}
            onClick={this.Result.bind(this)} />
          <input type="button" value="C" style={{ width: 73, height: 55 }}
            onClick={this.reset.bind(this)} />
        </div>
      </div>
    );
  }
}
export default simplecalculator