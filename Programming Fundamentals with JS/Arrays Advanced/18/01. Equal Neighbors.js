function equalNeighbors(arr) {
    let rows = arr.length;
    let columns = arr[0].length;
    let result = 0;

    for (let i = 0; i < rows; i++) {
        let currentArr = arr[i];
        let temp = 0;
        for (let j = 0; j < currentArr.length; j++) {
            let currentNum = currentArr[j];
            if (currentNum === temp) {
                result++;
            }
            temp = currentNum;
        }
    }
    let counter = 0;
    let temp = 0;
    for (let k = 0; k < columns; k++) {
        let counterRows = 0;
        let counter = 0;
        let temp = -1;
        while (counter !== columns) {

            if (counterRows === rows) {
                break;
            }
            let currentArr = arr[counterRows]
            let currentNum = currentArr[k];
            if (currentNum === temp) {
                result++;
            }
            temp = currentNum;
            counter++;
            counterRows++;
        }
    }
    console.log(result);
}

