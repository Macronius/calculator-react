import React, {Component} from 'react';
import './App.css';
import "./css/style.css";
import Button from './components/Button';

class App extends Component {
  //instantiate the state
  constructor(props){
    //instatiate the parent class, pass in props to the supermethod
    super(props);

    this.state = {
      current: '0',
      previous: [],
      nextIsReset: false,
    }
  }

  //METHODS:
  reset = ()=>{                     //reset function to run the Clear 'C' button
    this.setState({current: '0', previous: [], nextIsReset: false});
  }

  addToCurrent = (symbol)=>{
    //console.log("symbol");
    if( ['/', '*', '+', '-'].indexOf(symbol) > -1 ){
      let {previous} = this.state;
      previous.push(this.state.current + symbol);
      this.setState({previous, nextIsReset: true});
    }else{
      if((this.state.current === "0" && symbol !== ".") || this.state.nextIsReset){
        this.setState({current: symbol, nextIsReset: false});
      }else{
        this.setState({current: this.state.current + symbol});
      }
    }
  }

  calculate = (symbol)=>{
    let {current, previous, nextIsReset} = this.state;
    if(previous.length > 0){
      current = eval( String(previous[previous.length - 1] + current) );
      this.setState( {current, previous: [], nextIsReset: true} );
    }
  }

  //modeQuadraticEquation = (symbol,a,b,c)=> {
    //this.reset();
    //display "enter each quadratic term coefficient, pause 3000"
    //display "a: ";
    //this.addToCurrent;
    //display "b: ";
    //this.addToCurrent;
    //display "c: ";
    //this.addToCurrent;
    //quadrMathReport(this.state.current);
  //}

  //quadrMathReport = (arr)=> {
    //let a = arr[0];
    //let b = arr[1];
    //let c = arr[2];
    //const vertex = -b/2/a;
    //let discriminate  = b**2 - 4*a*c
    //if(discriminate >= 0){
      //let d = sqrt(disciminate)/2/a;
      //let x1 = vertex + d;
     //let x2 = vertex - d;
      //return `x1 = ${x1}`,  x2 = ${x2}`;
    //}else{
      //let term2 =  sqrt(-1*discriminate)/s/a;
      //return `x1 = ${vertex} + ${term2}i,  x2 = ${vertex} - ${term2}i`;
    //}
  //}

  render() {

    const buttons = [
      {symbol: 'C', cols: 3, action: this.reset},
      {symbol: '/', cols: 1, action: this.addToCurrent},
      {symbol: '7', cols: 1, action: this.addToCurrent},
      {symbol: '8', cols: 1, action: this.addToCurrent},
      {symbol: '9', cols: 1, action: this.addToCurrent},
      {symbol: '*', cols: 1, action: this.addToCurrent},
      {symbol: '4', cols: 1, action: this.addToCurrent},
      {symbol: '5', cols: 1, action: this.addToCurrent},
      {symbol: '6', cols: 1, action: this.addToCurrent},
      {symbol: '-', cols: 1, action: this.addToCurrent},
      {symbol: '1', cols: 1, action: this.addToCurrent},
      {symbol: '2', cols: 1, action: this.addToCurrent},
      {symbol: '3', cols: 1, action: this.addToCurrent},
      {symbol: '+', cols: 1, action: this.addToCurrent},
      {symbol: '0', cols: 2, action: this.addToCurrent},
      {symbol: '.', cols: 1, action: this.addToCurrent},
      {symbol: '=', cols: 1, action: this.calculate},
      // {symbol: 'quad', cols: 1, action: this.modeQuadraticEquation},
      // {symbol: 'cubic', cols: 1, action: this.modeCubicEquation}
    ];

    return (
      <div className="App">
        {this.state.previous.length > 0 ? <div className="floaty-last">{this.state.previous[this.state.previous.length - 1]}</div> : null }
        <input className="result" type="text" value={this.state.current} />

        {buttons.map( (btn, i)=>{
          return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={( (symbol)=>btn.action(symbol) )} />   //action to-do: need to receive a symbol to then pass to addToCurrent
        } )}

      </div>
    );
  }

}

export default App;


// NOTE: the properties inside the Button component: symbol, cols, action
//map components
//to insert javascript into the html, it kind of seems like this is the reason js arrow functions were invented, where the => 'arrow' is what moves the function over to the scope of the .map() method/function?


//TODO: if I can figure out how to display instructions for user inputs, receive inputs, then I can make this thing solve all kinds of math.
