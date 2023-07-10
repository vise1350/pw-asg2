class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  const person1 = new Person();
  console.log(person1.getDetails()); // "Name: Unknown, Age: 0"
  
  const person2 = new Person("John Doe", 30);
  console.log(person2.getDetails()); // "Name: John Doe, Age: 30"
  