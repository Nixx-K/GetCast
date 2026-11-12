import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section id="header"><p>blebleble</p></section>
      <section id="center">
        <div className="hero">
          Jesteśmy wirtualną agencją castingową dla osób pracujących w branży artystycznej - talentów oraz reżyserów castingu. 
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"><p>blablabla</p></section>
    </>
  )
}

export default App
