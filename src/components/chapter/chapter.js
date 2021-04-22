import React, { useEffect, useState } from 'react'
import './chapter.scss'

import Card from '../chapter-card/chapter-card'

const Chapter = ({chapter}) => {
    const [expand, expandHandler] = useState(false);
    const [expandStyle, styleHandle] = useState({flexWrap: 'nowrap',overflow:'hidden'})
   
    useEffect(() => {
        styleHandle({flexWrap: expand ? 'wrap': 'nowrap',
        overflow: expand ? 'visible': 'hidden'})
       
            
        
    },[expand])
    
    return (
        <div className='chapter-container'>
                <div className='chapter-heading'>
                    <div className='chapter-number'>
                        <span>{chapter.id}</span>
                        <svg 
                            width="32" 
                            height="33" 
                            viewBox="0 0 32 33" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            data-v-69f3b23e="">
                            <path d="M32 16C32 28.5 20.8366 33 12 33C3.16344 33 0 22.8366 0 14C0 5.16344 8.16344 0 17 0C25.8366 0 32 7.16344 32 16Z" 
                                fill="#758bff" 
                                data-v-69f3b23e="">
                            </path>
                        </svg>
                    </div>
                    <div className='heading-text'>
                        <h3>{chapter.heading}</h3>
                        <p>{chapter.subHeading} 
                            {   expand &&
                                <button className='btn-link' onClick={() => expandHandler(!expand)}>Collapse</button> 
                            }
                        </p>

                    </div>
                </div>
                <div className='quiz-cards'>
                    <div className='container' style={expandStyle}>
                       {
                        chapter.cards.map(card => 
                        <Card key={card.id} card={card} />)
                       }
                       {    !expand &&
                           <button className='expand-chapter' onClick={() => expandHandler(!expand)}>
                            <span className='down-arrow'>

                            </span>
                       </button>
                       }
                    </div>
                    
                    

                </div>
            </div>
    )
}
export default Chapter