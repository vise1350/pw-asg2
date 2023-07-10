class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}`;
    }
  }
  
  const car = new Car("Tesla", "Model S", 2023);
  console.log(car.getDescription()); // "This is a 2023 Tesla Model S"
  