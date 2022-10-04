let person = {
    firstName: 'Kellon',
    lastName: 'Parkinson',
    heightInFeet: 6,
    age: 27,
    favMovies: {
        movie1: 'Sandlot',
        movie2: 'Arrival'
    },
    favFoods: ['peanut butter', 'ice cream', 'sandwiches' ]
}

// console.log(person.firstName)
// console.log(person['firstName'])

let {firstName, lastName} = person
let fullName = `${firstName} ${lastName}`

// console.log(firstName)
// console.log(lastName)
// console.log(fullName)

// console.log(person['favFoods'][0])
// console.log(person.favFoods[1])

// -----CLASSES------

class Dog {
    constructor (name, color, age) {
        this.name = name
        this.color = color
        this.age = age
    }
    greeting() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age}.`)
    }
}

let dog1 = new Dog('Beans', 'golden', 1)

// console.log(dog1)

// dog1.greeting()

class Puppy extends Dog {
    constructor (name, color, age, trainingLevel) {
        super (name, color, age)
        this.trainingLevel = trainingLevel
    }
    levelUp(num) {
        return this.trainingLevel += num
    }
}

let puppy1 = new Puppy ('Max', 'green', 4, 9)
// console.log(puppy1)

puppy1.greeting()

console.log(puppy1.levelUp(1))

let food = {
    name: 'pizza',
    price: 10,
    introduction: () => {
        console.log(`Hi, I love pizza.`)
    }
}

food.introduction()