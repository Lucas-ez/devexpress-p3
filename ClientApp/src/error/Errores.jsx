import React, { useEffect, useMemo, useState } from 'react'

const UseEffectError = () => {
  
  useEffect(()=> {
    console.log("hace algo");
  })
  
  return (<>
    <div>useEffect sin Dependencias
      <hr/>
    </div>
  </>)
}

const StateNoChangeError = () => {

  const [num, setNum] = useState(0)

  const handleClick = () => {
    setNum(num + 1)
    setNum(num + 1)
  }

  return (
    <div>
      <div>{num}</div>
      <button onClick={handleClick}>Incrementar 2</button>
    </div>
  )
}

const KeyRequired = () => {
  const array = useMemo(() => {
    return [1,2,3,4,5,6,7,8]
  }, [])
  
  return (
    <div>
      {
        array.map(e => <span>{e}</span>)
      }
    </div>
  )
}

const Errores = () => {
  return (
    <div>
      <UseEffectError/> 
      <StateNoChangeError/>
      {/* <KeyRequired/> */}
    </div>
  )
}

export default Errores