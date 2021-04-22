import React from 'react'
import './chapters.scss'

import Chapter from '../chapter/chapter'

import chapter from '../../assets/chapter-list'

const Chapters = () => {
    return (
        <div className='chapters'>
        {
            chapter.map(chapter => 
                <Chapter key={chapter.id} chapter={chapter}/>
            )
        }
        </div>
    )
}

export default Chapters