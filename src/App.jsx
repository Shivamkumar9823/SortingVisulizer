import React  from 'react';
import SortingVisualizer from './components/SortingVisualizer.jsx';
import AlgorithmDescriptions from './components/AlgorithmDescriptions.jsx';
import './App.css';
import { useState } from 'react';

function App() {
    const [algorithm, setAlgorithm] = useState('Bubble Sort');
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sorting Algorithm Visualizer</h1>
      </header>
      <main>
        <SortingVisualizer  
          algorithm={algorithm}
          setAlgorithm={setAlgorithm} 
           />
        <AlgorithmDescriptions selectedAlgorithm={algorithm} />
      </main>
    </div>
  );
}

export default App;


