function printAndSum(start, end) {

    let sum = 0;
    let printLine = "";

    for (i = start; i <= end; i++) {
        printLine += i + " ";
        sum += i;
    }
    console.log(printLine)
    console.log(`Sum: ${sum}`)
}