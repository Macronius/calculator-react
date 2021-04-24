import React, {Component} from 'react';

//when you write a react component, you always want to extend react's component class
class Button extends Component {

    //1st: need a render method that returns html
    render (){
        return(
            <div className={`column-${this.props.cols}`}>
                <button className="calc-button" onClick={ ()=>{this.props.action(this.props.symbol)} }>{this.props.symbol}</button>         {/* we need props so that each time we instantiate a button, the button knows what it is and what it should do */}
            </div>
        )
    }
    
}

export default Button;

//Need to rig-up the action:
//this.props.action is a function that takes in the symbol and passes it over to the button's action function which is addToCurrent or reset
//create an onClick handler for the "button 'object?' ", take the 'e' parameter, for no reason other than to use the arrow (or empty parameters list)