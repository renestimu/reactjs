import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useEffect(()=>{
    console.log('useEffect')
  })
  return (
    <>
     <div>use effect</div>
    </>
  )
}

export default App
