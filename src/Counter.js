import React, { Component } from 'react';

//counter 컴포넌트를 생성하고 component 를 상속
class Counter extends Component {
    render(){
        return (
            <div>
                <h1>Counter</h1>
                <div>값 : {this.props.number}</div>
                <button onClick={this.props.handleIncrease}>+</button>
            </div>
        );
    }
}
export default Counter;