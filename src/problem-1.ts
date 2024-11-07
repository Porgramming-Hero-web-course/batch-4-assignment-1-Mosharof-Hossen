function sumArray(numbers: number[]): number {
    return numbers.reduce((acc: number, num: number): number => acc + num, 0)
}


// console.log(sumArray([1, 2, 3, 4, 5, 6]));