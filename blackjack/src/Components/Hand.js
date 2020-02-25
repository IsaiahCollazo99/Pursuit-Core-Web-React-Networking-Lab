import React from 'react';
import Card from './Card';

class Hand extends React.Component {
    render = () => {
        let {hand} = this.props;
        let cards = hand.map(card => {
            return <Card img={card.image} value={card.value} />
        })
        return (
            <div>

            </div>
        )
    }
}

export default Hand;