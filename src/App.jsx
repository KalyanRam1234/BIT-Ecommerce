import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
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
        <Route path='/' element={<DemoApp />}/>
      </Routes>
    </div>
  )
}

export default App
