// Problem 1
const filterEvenNumbers = (numbers: number[]) => {
    const duplicateNumber = numbers.filter((num: number) => num % 2 === 0)
    return duplicateNumber
}

filterEvenNumbers([1, 2, 3, 4, 5, 6])


// Problem 2
const reverseString = (str: string) => {
    const reverse = str.split('').reverse().join('')
    return reverse
}

reverseString('typescript')


