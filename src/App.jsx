import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'

function App() {

  return (
   <div className='w-full h-screen flex items-center justify-center overflow-hidden'>
    <Editor />
   </div>
  )
}

export default App
