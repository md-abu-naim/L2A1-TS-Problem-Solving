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


// Problem 3
type StringOrNumber = string | number

const checkType = (value: StringOrNumber) => {
    if (typeof value === 'number') {
        return 'Number'
    } else if (typeof value === 'string') {
        return 'String'
    }
}

checkType('hellow')
checkType(52)


// Problem 4
const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    const result = obj[key]
    return result
}

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "id");


// Problem 5
interface Book {
    title: string,
    author: string,
    publishedYear: number,
}

const toggleReadStatus = (book: Book) => {
    return { ...book, isRead: true }
}


const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);


// Problem 6
class Person {
    name: string;
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

class Student extends Person {
    grade: string

    constructor(name: string, age: number, grade: string){
        super(name, age)

        this.grade = grade
    }

    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const student = new Student("Alice", 20, "A");
student.getDetails();