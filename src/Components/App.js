import React from "react";
import "../styles.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinput: "",
      list: []
    };
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addToList(input) {
    let ListArray = this.state.list;
    ListArray.push(input);
    this.setState({ list: ListArray });
  }

  render() {
    return (
      <div className="App">
        <h1>ToDoList</h1>
        <input
          onChange={e => this.changeUserInput(e.target.value)}
          type="text"
        />
        <button onClick={() => this.addToList(this.state.userInput)}>
          Add
        </button>
        <ol>
          {this.state.list.map(val => (
            <li>{val}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
