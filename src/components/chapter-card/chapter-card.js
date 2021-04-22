import React from 'react'
import './chapter-card.scss'


const Card = ({card}) => {
    return (
        <div className='card-outer'>
        <div className='quiz-card'>
                <div className='quiz-card-image'>
                    <img
                        src={card.img}
                        alt='card img' />
                </div>
                <div className='quiz-card-data'>
                    <h4>{card.heading}</h4>
                    <div className='sub-head'>
                        <p>{card.subHeading}
                        </p>
                    </div>
                    
                </div>
                <div className='progress'>
            </div>
            </div>
        </div>
    )
}

export default Card