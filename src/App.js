import React, { Component } from 'react'
import Plus from './components/Plus'
import Subtract from './components/Subtract'
import Reset from './components/Reset'
import InputNum from './components/InputNum'

class App extends Component {
  state = { 
  count: 0
}

countUp = () => {
  this.setState(
   { count: this.state.count + 1}
  )
}

countDown = () => {
  this.setState(
   { count: this.state.count - 1 }
  )
}

reset = () => {
  this.setState(
   { count:0 }
  )
}
inputNum =( number ) =>{
  let value = parseInt(number)
  this.setState(
    {count: this.state.count + value}
  )
}

  render() { 
    return(
      <div className='App'>
        <div className='container'>
        <h1 className='output'>{this.state.count}</h1>
        </div>

        <div className='container-countup'>
        <Plus countUp={this.countUp} />
        </div>

        <div className='container-countdown'>
        <Subtract countDown ={this.countDown} />
        </div>

        <div className="container-inputnum">
        <InputNum inputNum={this.inputNum} />
        <Reset reset={this.reset} />
      </div>
      </div>
    )
  }
}
export default App 