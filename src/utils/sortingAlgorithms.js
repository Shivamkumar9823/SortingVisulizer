const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function bubbleSort(array, setArray, speed) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        setArray([...array]);
        await delay(speed);
      }
    }
  }
}

export async function selectionSort(array, setArray, speed) {
    const arr = [...array]; // Copy to avoid mutating original array
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swap the minimum element with the first unsorted element
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed)); // Wait for animation
      }
    }
  

}

export async function insertionSort(array, setArray, speed) {
    const arr = [...array]; // Copy to avoid mutating original array
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      
      // Move elements of arr[0..i-1] that are greater than key
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed)); // Wait for animation
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed)); // Wait for animation
    }
}

export async function mergeSort(array, setArray, speed) {
    const arr = [...array]; // Copy to avoid mutating original array

    const merge = async (left, right) => {
      const merged = [];
      let i = 0;
      let j = 0;
  
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          merged.push(left[i]);
          i++;
        } else {
          merged.push(right[j]);
          j++;
        }
        setArray([...merged, ...left.slice(i), ...right.slice(j)]);
        await new Promise((resolve) => setTimeout(resolve, speed)); // Wait for animation
      }
  
      return [...merged, ...left.slice(i), ...right.slice(j)];
    };
  
    const sort = async (arr) => {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      const left = await sort(arr.slice(0, mid));
      const right = await sort(arr.slice(mid));
  
      return await merge(left, right);
    };
  
    await sort(arr);

}
  
export async function quickSort(array, setArray, speed) {
    const arr = [...array]; // Copy to avoid mutating original array

    const partition = async (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, speed)); // Wait for animation
        }
      }
  
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed)); // Wait for animation
      return i + 1;
    };
  
    const sort = async (arr, low, high) => {
      if (low < high) {
        const pi = await partition(arr, low, high);
        await sort(arr, low, pi - 1);
        await sort(arr, pi + 1, high);
      }
    };
  
    await sort(arr, 0, arr.length - 1);
    
}

export async function heapSort(array, setArray, speed) {
    const arr = [...array]; // Copy to avoid mutating original array

    const heapify = async (arr, n, i) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && arr[left] > arr[largest]) largest = left;
      if (right < n && arr[right] > arr[largest]) largest = right;
  
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed)); // Wait for animation
  
        await heapify(arr, n, largest);
      }
    };
  
    const sort = async (arr) => {
      const n = arr.length;
  
      // Build a maxheap
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
      }
  
      // Extract elements one by one from the heap
      for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed)); // Wait for animation
        await heapify(arr, i, 0);
      }
    };
  
    await sort(arr);
    
}
