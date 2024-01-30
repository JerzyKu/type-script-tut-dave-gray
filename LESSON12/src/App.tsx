import Counter from "./compinents/Counter";
import Heading from "./compinents/Heading";
import List from "./compinents/List";
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
      <List items={["Coffee", "Tacos", "Code"]} render={(item: string) => <span className="bold ">{item}</span>}/>
    </>
  );
}

export default App;
