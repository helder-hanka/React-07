import React from 'react'

const DisplyaCharacter = ({simpson}) => {
    
    return (
        <div>
            <p>{simpson.character}</p>
            <p>{simpson.quote}</p>
            <img src={simpson.image} alt={simpson.character} />
        </div>
    )
}

export default DisplyaCharacter