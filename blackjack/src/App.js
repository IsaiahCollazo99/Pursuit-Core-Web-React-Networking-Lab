import React from 'react';
import './App.css';
import Menu from './Components/Menu';

class App extends React.Component {

  state = {
    deckId: "",
    hand: []
  }

  handleSubmit = (deckId) => {
    this.setState({deckId});
  } // End of handleSubmit() function

  handleGenerateDeck = () => {
    this.setState({deckId: "random"});
  } // End of handleGenerateDeck() function

  componentDidUpdate() {
    if(this.state.deckId === "random") {
      
    }
  } // End of componentDidUpdate() function
  
  render = () => {
    return (
      <div className="App">
        <Menu handleSubmit={this.handleSubmit} handleGenerate={this.handleGenerateDeck}/>
      </div>
    );
  }
}

export default App;
