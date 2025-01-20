
import { useState } from 'react'
import './App.css'
import Polygon from './components/polygon'
import Slider from './components/slider'

function App() {
  const [sides, setSides] = useState(3)
  return (
    <>
      <Polygon sides={sides} size={100} fill="lightblue" stroke="black" strokeWidth={1} />
      <Slider min={3} max={12} onChange={setSides} value={sides} />
    </>
  )
}

export default App
