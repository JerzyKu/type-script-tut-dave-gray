import Counter from "./compinents/Counter";
import Heading from "./compinents/Heading";
import Section from "./compinents/Section";

import { useState } from "react";

function App() {

  const [count, setCount] = useState<number>(0)


  return (
    <>
      <Heading title="MAmma mija !! its an mario " />
      <Section title='asfda'>bla bla </Section>
      {/* <Counter setCount={setCount} count={count}/> */}
      <Counter setCount={setCount} count={count}> Count is {count}</Counter>
    </>
  );
}

export default App;
