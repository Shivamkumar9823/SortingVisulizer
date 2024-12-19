import React, { useState, useEffect } from 'react';
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort,
} from '../utils/sortingAlgorithms';
import styles from '../styles/SortingVisualizer.module.css';

const SortingVisualizer = ({algorithm, setAlgorithm}) => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [isSorting, setIsSorting] = useState(false);

  // Generate a new random array
  const generateNewArray = () => {
    if (isSorting) return;
    const newArray = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 100) + 200    //.random choose floating point number from [0,1); and .floor round off into integer.
    );
    setArray(newArray);
  };



  // Adjust array size
  useEffect(() => {
    generateNewArray();
  }, [arraySize]);

  const handleSort = async () => {
    if (isSorting) return;

    setIsSorting(true);
    const arrayCopy = [...array];
    switch (algorithm) {
      case 'Bubble Sort':
        await bubbleSort(arrayCopy, setArray, speed);
        break;
      case 'Selection Sort':
        await selectionSort(arrayCopy, setArray, speed);
        break;
      case 'Insertion Sort':
        await insertionSort(arrayCopy, setArray, speed);
        break;
      case 'Merge Sort':
        await mergeSort(arrayCopy, setArray, speed);
        break;
      case 'Quick Sort':
        await quickSort(arrayCopy, setArray, speed);
        break;
      case 'Heap Sort':
        await heapSort(arrayCopy, setArray, speed);
        break;
      default:
        break;
    }
    setIsSorting(false);
  };

  
  return (
    <div className={styles.visualizer}>
      <div className={styles.controls}>
        <button onClick={generateNewArray} disabled={isSorting}>
          Generate New Array
        </button>
        <label>
          Array Size:
          <input
            type="range"
            min="10"
            max="100"
            value={arraySize}
            onChange={(e) => setArraySize(Number(e.target.value))}
            disabled={isSorting}
          />
        </label>
        <label>
          Speed:
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={(e) => setSpeed(100 - Number(e.target.value))}
            disabled={isSorting}
          />
        </label>
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value )}
          disabled={isSorting}
        >
          <option>Bubble Sort</option>
          <option>Selection Sort</option>
          <option>Insertion Sort</option>
          <option>Merge Sort</option>
          <option>Quick Sort</option>
          <option>Heap Sort</option>
        </select>
        <button onClick={handleSort} disabled={isSorting}>
          Start Sorting
        </button>
      </div>
      <div className={styles.arrayContainer}>
        {array.map((value, idx) => (
          <div
            key={idx}
            className={styles.arrayBar}
            style={{
              height: `${value}px`,
              backgroundColor: 'turquoise',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
