import React from 'react'

const CardData = ({title, image}) => {
    return (
        <>
            <h1>{title}</h1>
            <img src={image} style={{width: 500, height: 500}}/>        
        </>
    )
}

export default CardData;