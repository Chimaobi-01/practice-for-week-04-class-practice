// Your code here
class Person {

  static introducePeople(persons) {
    if (!Array.isArray(persons)) {
      throw new Error("introducePeople only takes an array as an argument.")
      
    }

    for (let i = 0; i < persons.length; i++) {
      let person = persons[i]

      if (!(person instanceof Person))
        throw new Error("All items in array must be Person class instances.")
      
    }

    persons.forEach(person => {
      person.introduce()
    })

  }

  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }
}

const test = new Person("somebody","anybody",34)
test.introduce()



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}