function removeDuplicates(elements: number[]): number[] {
    const uniqueNumbers: Set<number> = new Set(elements);
    return [...uniqueNumbers] //spread operator
}

// console.log(removeDuplicates([1, 2,25, 2, 3, 4, 4, 5]));