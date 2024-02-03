import Counter from "./Counter";

function App() {
  return (
    <>
      <Counter children={(num) => <>Current count:  {num}</>}></Counter>
      <Counter>{(num) => <>Current count:  {num}</>}</Counter>
    </>
  );
}

export default App;
