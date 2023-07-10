class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  const employee = new Employee("John Doe", "Software Engineer", 100000);
  console.log(employee.getSalary()); // 100000
  