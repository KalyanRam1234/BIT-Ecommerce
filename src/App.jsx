import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
const DemoApp=()=>{
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/test' element={<DemoApp />}/>

      </Routes>
    </div>
  )
}

export default App
