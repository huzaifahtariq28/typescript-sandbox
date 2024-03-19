// Question 1

class Logger {
  constructor(public logFile: string) {}

  log(message: string): void {
    console.log(`Logging message: ${message} in file: ${this.logFile}`);
  }
}

// Question 2

class Person1 {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Question 3

class Employee1 extends Person1 {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

// Question 4

interface IEmployee {
  name: string;
  salary: number;
  address: Address;
}

interface Address {
  street: string;
  city: string;
  zipCode: number;
}
