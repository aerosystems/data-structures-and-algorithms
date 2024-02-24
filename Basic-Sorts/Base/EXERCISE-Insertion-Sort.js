function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j;
        let temp = arr[i];
        for (j = i - 1; arr[j] > temp && j >= 0; j--) {
            console.log(i, j);
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

function test() {
    let myArray = [4, 2, 6, 5, 1, 3];
    insertionSort(myArray);
    console.log(myArray);
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/  