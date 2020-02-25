import React from 'react';

class Menu extends React.Component {
    render = () => {
        return (
            <div>
                <button>Generate New Deck</button>
                <form>
                    <label for="deckId">Input Existing Deck: </label>
                    <input name="deckId" type="text" />
                    <button type="submit">Draw</button>
                </form>
            </div>
        )
    }
}

export default Menu;