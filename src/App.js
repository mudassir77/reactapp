import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counters from './components/counters'
import NavBar from './components/Navbar';
import intitalCount from "./components/check";


class App extends React.Component {
  state = {
    name: "Aaqib",
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 4 },
      { id: 4, value: 1 }

    ]
  }
  componentDidMount() {
    console.log("Componentdid monunt ")
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Componentdid update ", prevProps, prevState)
  }

  handleDelete = (counterId) => {
    console.log("event handler called", counterId)
    const counters = this.state.counters.filter((count) => count.id !== counterId)
    this.setState({ counters })

  }
  addNewObject = () => {
    let cloneState = { ...this.state };
    // console.log(cloneState.counters.length, "**********************clone")
    cloneState.counters.push({ id: (cloneState.counters.length + 1), value: 0 })
    this.setState(cloneState)

  }


  resetCounters = () => {

    let countt = intitalCount.intitalCount
    const counters = this.state.counters.filter((count) => count.id <= countt)
    this.setState({ counters })
  }


  deleteLastObject = () => {
    let cloneState = { ...this.state };
    console.log(cloneState.counters.length, "**********************clone")

    cloneState.counters.pop({ id: (cloneState.counters.length + 1), value: 0 })
    this.setState(cloneState)

  }


  onSingleReset = (count) => {
    let cloneState = { ...this.state }
    cloneState.counters = cloneState.counters.map((eachCounter) => {
      let each = { ...eachCounter }
      if (each.id == count) {
        each.value = 0
      }
      return each
    })
    this.setState(cloneState)
  }


  handleIncrementCount = counter => {
    const counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
    console.log(counter, "counter***********")

  }


  handleDecrement = counter => {
    if (counter.value > 0) {
      const counters = [...this.state.counters]
      let index = counters.indexOf(counter)
      counters[index] = { ...counter }
      counters[index].value--
      this.setState({ counters })
      console.log("decrement")
    }


  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.onSingleReset} onIncrement={this.handleIncrementCount}
            onDelete={this.handleDelete} onDecrement={this.handleDecrement} onAddNewObject={this.addNewObject}
            onLastDelete={this.deleteLastObject} overallReset={this.resetCounters} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

