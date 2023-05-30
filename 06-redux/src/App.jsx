import './App.css';

import Interval from './components/Interval';
import Avg from './components/Avg';
import Draw from './components/Draw';
import Sum from './components/Sum';

function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <div className="line">
        <Interval />
      </div>
      <div className="line">
        <Avg></Avg>
        <Sum></Sum>
        <Draw></Draw>
      </div>
    </div>
  );
}

export default App;
