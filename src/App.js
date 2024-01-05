import {useState} from "react";
import './App.css';

function App() {

  const [count , setCount] = useState(0);

  const handleSubtract = () => { setCount (count -1)}
  const handleReset = () => { setCount (0)}
  const handleAdd = () => { setCount (count + 1)}

  return (
    <section className="couter-sec --flex-center">
      <div className='container counter --card --center-all'>
          <h4>React counter App</h4>
          <h1 className='count --my2'> {count} </h1>
          <div className='buttons'>
            <button className='--btn --btn-danger' onClick={handleSubtract}>- Substract </button>
            <button className='--btn' onClick={handleReset}> ! Reset </button>
            <button className='--btn --btn-success' onClick={handleAdd}>+ Add </button>            
          </div>
      </div>
    </section>
  );
}

export default App;
