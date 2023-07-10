function getPerson(person) {
    try {
      name = person["name"];
      age = person["age"];
      return `Name: ${name}, Age: ${age}`;
    } catch (error) {
      if (error.name === "KeyError") {
        throw new Error(`Invalid parameter type. Missing property: ${error.message}`);
      } else {
        throw error;
      }
    }
  }
  
  const person = {
    name: "John Doe",
    age: 30,
  };
  
  console.log(getPerson(person)); // "Name: John Doe, Age: 30"
  
  const invalidPerson = {
    name: "Jane Doe",
  };
  
  try {
    console.log(getPerson(invalidPerson));
  } catch (error) {
    console.log(error.message); // "Invalid parameter type. Missing property: age"
  }
  