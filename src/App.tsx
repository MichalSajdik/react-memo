import React, {useState} from 'react';
import './App.css';
import {MemoCounter} from "./Counter";

function App() {
  const [aCount, setA] = useState(0);
  const [bCount, setB] = useState(0);

  const incrementA = React.useMemo(() => () => setA(aCount + 1), [aCount]);
  const incrementB = React.useMemo(() => () => setB(bCount + 1), [bCount]);

  return (
      <>
        <MemoCounter label="A" count={aCount} increment={incrementA} />
        <MemoCounter label="B" count={bCount} increment={incrementB} />
        <MemoCounter label="A" count={aCount} increment={incrementA} />
        <MemoCounter label="B" count={bCount} increment={incrementB} />
      </>
  );
}

export default App;
