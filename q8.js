const Student = {
    name: "",
    printDetails() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  
  const student = new Student();
  student.name = "Mithun";
  student.printDetails(); // Hello, my name is Mithun
  