import React, {Component} from 'react';
import Counter from './Counter.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list:[],
      number: 0
    };
  }

  //증가 함수
  handleIncrease = () => {
    const {number} = this.state;
    this.setState({
      number:number + 1
    });
  }


  updateInput(key,value){
    this.setState({[key]:value});
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
  
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:''
    });
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList});
  }

  

  render(){
    return (
      <div className='App'>
        <h1 className="title">Todo App</h1>
        Add a Task!
        <br/>
        <input
            type='text'
            placeholder='오늘 할일을 적으세요'
            value={this.state.newItem}
            onChange={e => this.updateInput('newItem', e.target.value)}
          />
        <button onClick={() => this.addItem()}>+</button>
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>{item.value}
                <button onClick={()=> this.deleteItem(item.id)}>X</button>
                {/* <i>X</i> */}
              </li>
              
            );
          })}
        </ul>

        <Counter handleIncrease={this.handleIncrease} number={this.state.number}></Counter>
      </div>
    );
  }
}

export default App;
