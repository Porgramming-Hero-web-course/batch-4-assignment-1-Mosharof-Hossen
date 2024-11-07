function countWordOccurrences(sentence: string, word: string): number {
    return sentence.split(" ").reduce((acc: number, w: string) => {
        if (w.toLocaleLowerCase() == word.toLocaleLowerCase()) {
            return ++acc;
        } else {
            return acc
        }
    }, 0)
}

// console.log(countWordOccurrences("I love typescript typescript Typescript Typescript", "typescript"));