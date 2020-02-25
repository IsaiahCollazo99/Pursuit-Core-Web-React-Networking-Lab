import React from 'react';

class Menu extends React.Component {
    render = () => {
        const {handleSubmit, handleGenerate} = this.props;
        return (
            <div>
                <button onClick={handleGenerate}>Generate New Deck</button>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e.target.children[1].value);
                }}>
                    <label htmlFor="deckId">Input Existing Deck: </label>
                    <input name="deckId" type="text" />
                    <button type="submit">Draw</button>
                </form>
            </div>
        )
    }
}

export default Menu;