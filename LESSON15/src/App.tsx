import Counter from "./Counter";
import { CounterProvider, initiState } from "./context/CounterContext";


function App() {
  return (
    <>
    <CounterProvider count={initiState.count} text={initiState.text}>
      <Counter children={(num) => <>Current count:  {num}</>}></Counter>
    </CounterProvider>
    <CounterProvider count={initiState.count} text={'initiState.text'}>
      <Counter>{(num) => <>Current count:  {num}</>}</Counter>
    </CounterProvider>
    </>
  );
}

export default App;
