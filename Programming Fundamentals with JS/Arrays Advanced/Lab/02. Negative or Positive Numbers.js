function postitiveNegative(arr) {

    let newArr = [];

    for (let i of arr) {
        if (i < 0) {
            newArr.unshift(i);
        } else {
            newArr.push(i);
        }
    }
    console.log(newArr.join(`\n`));
}
