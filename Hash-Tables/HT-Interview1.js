function itemInCommonPowerTwo(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) return true
        }
    }
    return false
}

function itemInCommonLinear(arr1, arr2) {
    let tempObj = {};
    for (let i = 0; i < arr1.length; i++) {
        let key = arr1[i];
        tempObj.key = true;
    }
    for (let j = 0; j < arr2.length; j++) {
        let key = arr2[j];
        if (tempObj.key) return true;
    }
    return false;

}

let array1 = [1, 3, 5]
let array2 = [2, 4, 5]


console.log(itemInCommonLinear(array1, array2))