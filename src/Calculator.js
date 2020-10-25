import React, { Component } from "react";
import "./calculator.css"

class Calculator extends Component{

  constructor(){
    super();
    this.state = {
      result:0,
      number1:7,
      number2:10,
      operation: "+",
    }
    /*За допомогою методо bind() переприсвоюємо контекст для методів, тобто в дані методи бути передаватись всі дані this.state. Кароче бред)) */
    this.showResult = this.showResult.bind(this)
    this.handleNumber1Change = this.handleNumber1Change.bind(this)
    this.handleNumber2Change = this.handleNumber2Change.bind(this)
    this.handleOperationChange = this.handleOperationChange.bind(this)
  }

  showResult(){

    let result = 0;
    switch(this.state.operation){
      case '+': result = this.state.number1 + this.state.number2;
                 break;
      case '-': result = this.state.number1 - this.state.number2;
                 break;
                 default:break;
    }
    this.setState({result: result})

  }

  /*Тут ми створюємо методи які відловлюють введені значення і перезаписують їх в необхідні для нас поля state .Значення "+" використовується для того щоб перетворити отриманні значення, а це строки, в числа */
  handleNumber1Change(event){
    this.setState({number1: +event.target.value })
  }
  handleNumber2Change(event){
    this.setState({number2: +event.target.value })
  }
  handleOperationChange(event){
    this.setState({operation: event.target.value })
  }

render(){
  return(
<div className="calculator">
  <div>
      <input value={this.state.number1} onChange={this.handleNumber1Change}/>
  </div>
  <div>
      <select className="" onChange={this.handleOperationChange}>
      <option value="+">+</option>
      <option value="-">-</option>
      </select>
  </div>
  <div>
      <input value={this.state.number2} onChange={this.handleNumber2Change}/>
  </div>
  <div>
      <button onClick={this.showResult}>Get result</button>
  </div>
<div>
  Result:<span>{this.state.result}</span>
</div>

    </div>
  )
}
}

export default Calculator;
