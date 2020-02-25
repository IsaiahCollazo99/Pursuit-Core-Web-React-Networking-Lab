import React from 'react';
import axios from 'axios';
import Menu from './Components/Menu';
import Hand from './Components/Hand';
import './App.css';

class App extends React.Component {

  state = {
    deckId: "",
    hand: []
  }

  handleSubmit = (deckId) => {
    this.setState((prevState) => ({deckId}));
    this.drawCards();
  } // End of handleSubmit() function

  handleGenerateDeck = () => {
    this.setState({deckId: "random"});
  } // End of handleGenerateDeck() function

  async componentDidUpdate() {
    try {
      if(this.state.deckId === "random") {
        let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        this.setState((prevState) => ({deckId: res.data.deck_id}));
        this.drawCards();
      } else {
        this.drawCards();
      }
    } catch(err) {
      console.log(err);
    }
  } // End of componentDidUpdate() function

  drawCards = async () => {
    let { deckId } = this.state;
    try {
      let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
      this.setState((prevState) => ({hand: res.data.cards}))
    } catch (err) {
      console.log(err);
    }
  } // End of drawCards() function
  
  render = () => {
    return (
      <div className="App">
        <Menu handleSubmit={this.handleSubmit} handleGenerate={this.handleGenerateDeck}/>
        <Hand hand={this.state.hand}></Hand>
      </div>
    );
  }
}

export default App;
