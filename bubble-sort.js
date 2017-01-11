//Bubble sort to sort an array. O(n) complexity at best. O(n^2) at worst
//

function bubbleSort(arr){
  'use strict';
  for(let i = arr.length-1; i >= 0; i--){
    console.log(`PASSES LEFT ${i}`);
    for (let j = 0; j<=i; j++){
      console.log(arr);
      if (arr[j+1] < arr[j]){
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([1,3,6,5,2,7,8]));
console.log(bubbleSort([1,4,6,5,20,19,3]));
