import { Algorithm } from "../types";

const binarySearch = `
  const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
};
`;

const selectionSort = `
  const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
};
`;

const bubbleSort = `
    const bubbleSort = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    };
`;

const mergeSort = `
    const mergeSort = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }
      
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
      
      return merge(left, right);
    };
    
    const merge = (left, right) => {
      const result = [];
      let leftIndex = 0;
      let rightIndex = 0;
      
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
      
      const res = result.concat(left.slice(leftIndex))
      return res.concat(right.slice(rightIndex));
    };
`;

export const ALGORITHMS: Algorithm[] = [
  {
    name: "Binary search",
    content: binarySearch,
  },
  {
    name: "Selection sort",
    content: selectionSort,
  },
  {
    name: "Bubble sort",
    content: bubbleSort,
  },
  {
    name: "Merge sort",
    content: mergeSort,
  },
];
