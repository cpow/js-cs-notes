//Binary search should quickly search an array in O(log N) fashion
//

function binarySearch(array, val){
  'use strict';

  let minimumIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;

  (function search(){
    currentIndex = Math.floor((minimumIndex + maxIndex) / 2);

    console.log(`curently looking between ${array[minimumIndex]} and ${array[maxIndex]}`);

    if (array[currentIndex] === val ){
      console.log(`FOUND IT! ${val} == ${array[currentIndex]}`);
      return;
    }

    if (val > array[currentIndex]){
      minimumIndex = currentIndex + 1;
    }

    if (val < array[currentIndex]){
      maxIndex = currentIndex -1;
    }

    search();
  })();
}

let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
binarySearch(arr, 5);
binarySearch(arr, 3);
binarySearch(arr, 59);
binarySearch(arr, 61);
binarySearch(arr, 7);
