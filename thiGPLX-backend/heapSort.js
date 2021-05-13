function heapify(arr, n, i) {
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (
    l < n &&
    parseInt(arr[l].order.$numberInt) > parseInt(arr[largest].order.$numberInt)
  )
    largest = l;

  // If right child is larger than largest so far
  if (
    r < n &&
    parseInt(arr[r].order.$numberInt) > parseInt(arr[largest].order.$numberInt)
  )
    largest = r;

  // If largest is not root
  if (largest != i) {
    var temp = arr[i].order.$numberInt;
    arr[i].order.$numberInt = arr[largest].order.$numberInt;
    arr[largest].order.$numberInt = temp;
    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// main function to do heap sort
function heapSort(arr, n) {
  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) heapify(arr, n, i);

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    var temp = arr[0].order.$numberInt;
    arr[0].order.$numberInt = arr[i].order.$numberInt;
    arr[i].order.$numberInt = temp;

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
}

exports.sortByOrder = function (array) {
  heapSort(array, array.length);
  return array;
};
