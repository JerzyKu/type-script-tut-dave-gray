import { KeyboardEvent, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from "react"

interface User {
  id: number,
  username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if ( n === 0 ) return 0
  if ( n === 1 ) return 1 
  return fib(n-1) + fib(n-2)
}

const myNum: number = 40

function App() {

  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<(User[] | null)>(null)

   const inputRef = useRef<HTMLInputElement>(null)

  //  if(!inputRef.current)
  
  console.log(inputRef.current);
  console.log(inputRef?.current?.value);


  useEffect(()=>{
    console.log('Mounting');
    
    return () => console.log('UnMount');
    
  },[])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount( p => p + 2), [])
  
  // const result: number = fib(myNum)
  const result: number = useMemo(() => fib(myNum), [myNum] )

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>+</button> <br /> <br />
      {result}
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default App
