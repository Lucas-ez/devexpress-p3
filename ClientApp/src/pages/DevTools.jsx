import { useState } from "react"
import Errores from "../error/Errores"



const DevTools = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      <hr></hr>
      <Errores/>
    </div>
  )
}

export default DevTools