import React from 'react';

const Card = ({img, value}) => {
    return (
        <li value={value}>
            <img src={img} alt="card"></img>
        </li>
    )
}

export default Card;