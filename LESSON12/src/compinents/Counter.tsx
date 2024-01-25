// import React, { useState } from 'react'

import { ReactNode } from "react"

type CounterProps = {
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
    children: ReactNode
}

const Counter = ({children, count, setCount}: CounterProps) => {

    // const [count, setCount] = useState<number>(0)

  return (
    <>
        <h1>count is {count}</h1>
        <h1>{children}</h1>
        <button onClick={() => setCount( p => p + 1 )}> + </button>
        <button onClick={() => setCount( p => p - 1 )}> - </button>
    </>
  )
}

export default Counter