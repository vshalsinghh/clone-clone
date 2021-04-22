import React from 'react'
import './hero.scss'

const Hero = ({toggleShow}) => {
    return (
        <div className='hero-page'>
            <div className='container'>
               
                <div className='hero-content'>
                    <div className='text'>
                    <p className='back-btn'>
                        <a href='/'><span className='back-arrow'>&#60; </span>
                        Back to all courses</a>
                    </p>
                        <h1>Logic</h1>
                        <h2>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h2>
                        <div>
                            <p>
                                The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.
                            </p>
                            <p>
                            You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!
                            <a className='btn-link read-more-btn' href='/'>Read More</a>
                            </p>
                            <button className='btn-link '>
                                View prequisites and next steps
                            </button>
                            {/*modal */}
                        </div>
                        
                    </div>
                    <div className='card'>
                            <div className='card-image'>
                                <span className='image'></span>
                            </div>
                            <div className='stats'>
                                <div className='stat'>
                                    <h3>37</h3>
                                    <p>Interactive quizzes </p>
                                </div>
                                <div className='stat'>
                                    <h3>265+</h3>
                                    <p>Concepts and exercises </p>
                                </div>
                            </div>
                            <button className='btn' onClick={() => toggleShow(true)}>Start Course</button>

                        </div>
                </div>
            </div>
        </div>
    )
}
export default Hero