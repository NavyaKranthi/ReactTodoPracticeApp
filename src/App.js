import React, { Component } from 'react';
import './App.css';
import Ninjas from "./Ninjas"
import Ninja1 from "./Ninja1"
import AddNinja from "./AddNinja";

class App extends Component {
  // state = {
  //   name: 'Navya',
  //   age: 22
  // }

  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id:1},
      { name: 'Yoshi', age: 20, belt: 'blue', id:2},
      { name: 'Crystal', age: 50, belt: 'green', id:3}
    ]
  }

  addNinja = (ninja) =>{
      console.log(ninja);
      ninja.id = Math.random();
      //bad-practice: this.ninjas.push(ninja)
      let ninjas = [...this.state.ninjas, ninja]
      this.setState({
        ninjas : ninjas
      })
  }

  deleteNinja = (id) => {
    console.log(id)
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas : ninjas
    })
  }

  // handleClick = (e) => {
  //   //console.log(e.target);
  //   // this.setState({
  //   //   name: 'Crystal'
  //   // })
  //   console.log(this.state)
  // }
  // handleMouseOver = (e) => {
  //   console.log(e.target,e.pageX);
  // }
  // handleCopy = (e) => {
  //   console.log("Try being original once!");
  // }

  handleChange = (e) => {
    this.setState({
        name: e.target.value
      });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', this.state.name)
  }
  render() {
    return (
      <div className="App">
        {/* <h1>Hey</h1>
        <p>My Name is: {this.state.name} and I am {this.state.age}</p>
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseOver={this.handleMouseOver}>Hover Me</button>
        <p onCopy={this.handleCopy}>What we think, we become</p> */}

        {/* form */}
        {/* <h1>My name is {this.state.name} </h1>  
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button>Submit</button>
        </form> */}
        {/* <Ninjas name="Ryu" age="25" belt="black" />
        <Ninjas name="Crystal" age="15" belt="blue" /> */}


        {/* Outputting Lists */}
        {/* <Ninjas ninjas={this.state.ninjas} /> */}
        <Ninja1 deleteNinja = {this.deleteNinja} ninjas={this.state.ninjas} />

        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
