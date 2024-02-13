function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j + i < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}



let myArray = [4,2,6,5,1,3];
bubbleSort(myArray);
console.log(myArray);


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/