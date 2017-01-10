//Binary search should quickly search an array in O(log N) fashion
//

function binarySearch(array, val){
  'use strict';

  let minimumIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;


  (function search(){
    currentIndex = Math.floor((minimumIndex + maxIndex) / 2);

    console.log(`curently looking between ${minimumIndex} and ${maxIndex}`);

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

let arr = [1,2,3,4,5,6,7,9,10,11,12];
binarySearch(arr, 5);
binarySearch(arr, 3);
binarySearch(arr, 12);
