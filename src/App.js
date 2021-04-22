import React,{ useState} from 'react'
import './App.scss'

import Header from './components/header/header'
import Hero from './components/hero/hero'
import Chapters from './components/chapters/chapters'
import Modal from './components/modal/modal'

const App = () => {
  const [showModal, toggleShow] = useState(false)

 return(
   <div className='app'>
    <Header toggleShow={toggleShow}/>
    <Hero toggleShow={toggleShow}/>
    <Chapters />
    {showModal && <Modal toggleShow={toggleShow} />}
   </div>
 )
}

export default App
