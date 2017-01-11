//Selection sort. sorting algorithm with O(n^2) complexity always

function selectionSort(arr){
  for (let i = 0; i < arr.length; i++){
    let lowestIndex = i;
    for (let j = i+1; j < arr.length; j++){
      if (arr[j] < arr[lowestIndex]){
        lowestIndex = j;
      }
    }

    if (arr[i] > arr[lowestIndex]){
      let temp = arr[i];
      arr[i] = arr[lowestIndex];
      arr[lowestIndex] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([4,8,7,3,5,2,1]));
