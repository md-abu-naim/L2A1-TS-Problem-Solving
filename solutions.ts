// Problem 1
const filterEvenNumbers = (numbers: number[]) => {
    const evenNumbers = numbers.filter((num: number) => num % 2 === 0)
    return evenNumbers
}

// Problem 2
const reverseString = (str: string) => {
    const reversed = str.split('').reverse().join('')
    return reversed
}


// Problem 3
type StringOrNumber = string | number

const checkType = (value: StringOrNumber) => {
    if (typeof value === 'number') {
        return 'Number'
    }
    return 'String'
}


// Problem 4
const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    const result = obj[key]
    return result
}


// Problem 5
interface Book {
    title: string,
    author: string,
    publishedYear: number,
}

const toggleReadStatus = (book: Book) => {
    return { ...book, isRead: true }
}


// Problem 6
class Person {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Student extends Person {
    grade: string

    constructor(name: string, age: number, grade: string) {
        super(name, age)

        this.grade = grade
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}



// Problem 7
const getIntersection = (arr1: number[], arr2: number[]) => {
    return arr1.filter((item) => arr2.includes(item))

}