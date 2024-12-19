import React from 'react';
import styles from '../styles/SortingVisualizer.module.css';

const AlgorithmDescriptions = ({ selectedAlgorithm }) => {
  console.log(selectedAlgorithm)
  const algorithmDetails = {
    'Bubble Sort': {
      description:
        'Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.',
      timeComplexity: {
        best: 'O(n)',
        average: 'O(n²)',
        worst: 'O(n²)',
      },
      spaceComplexity: 'O(1)',
    },
    'Selection Sort': {
      description:
        'Selection Sort divides the array into a sorted and unsorted region. It repeatedly selects the smallest element from the unsorted region and swaps it with the first unsorted element.',
      timeComplexity: {
        best: 'O(n²)',
        average: 'O(n²)',
        worst: 'O(n²)',
      },
      spaceComplexity: 'O(1)',
    },
    'Insertion Sort': {
      description:
        'Insertion Sort iterates through the array, taking one element at a time and inserting it into its correct position in the sorted portion.',
      timeComplexity: {
        best: 'O(n)',
        average: 'O(n²)',
        worst: 'O(n²)',
      },
      spaceComplexity: 'O(1)',
    },
    'Merge Sort': {
      description:
        'Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and then merges the sorted halves.',
      timeComplexity: {
        best: 'O(n log n)',
        average: 'O(n log n)',
        worst: 'O(n log n)',
      },
      spaceComplexity: 'O(n)',
    },
    'Quick Sort': {
      description:
        'Quick Sort is a divide-and-conquer algorithm that selects a pivot, partitions the array into elements smaller and larger than the pivot, and recursively sorts the partitions.',
      timeComplexity: {
        best: 'O(n log n)',
        average: 'O(n log n)',
        worst: 'O(n²)',
      },
      spaceComplexity: 'O(log n)',
    },
    'Heap Sort': {
      description:
        'Heap Sort builds a max heap and repeatedly extracts the maximum element, placing it at the end of the array to achieve a sorted result.',
      timeComplexity: {
        best: 'O(n log n)',
        average: 'O(n log n)',
        worst: 'O(n log n)',
      },
      spaceComplexity: 'O(1)',
    },
  };

  const details = algorithmDetails[selectedAlgorithm] || algorithmDetails['Bubble Sort'];

  return (
    <div className={styles.description}>
      <h2>{selectedAlgorithm}</h2>
      <p>{details.description}</p>
      <div className={styles.complexity}>
        <h3>Time Complexity:</h3>
        <ul>
          <li>Best Case: {details.timeComplexity.best}</li>
          <li>Average Case: {details.timeComplexity.average}</li>
          <li>Worst Case: {details.timeComplexity.worst}</li>
        </ul>
        <h3>Space Complexity:</h3>
        <p>{details.spaceComplexity}</p>
      </div>
    </div>
  );
};

export default AlgorithmDescriptions;
