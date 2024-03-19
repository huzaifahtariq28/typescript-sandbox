// Creating Classes

class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number) {
    if (amount <= 0) throw new Error('Invalid amount!');
    this.calculateTax();
    this._balance += amount;
  }

  private calculateTax() {
    console.log('Calculating tax...');
  }

  // Getters

  get balance(): number {
    return this._balance;
  }

  // Setters

  // set balance(amount: number) {
  //   if (amount <= 0) throw new Error('Invalid amount!');
  //   this._balance = amount;
  // }
}

// Creating Objects

let account = new Account(1, 'Huzaifah', 1000);
account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(account instanceof Account);

// Index Signatures

class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats.A2 = 'John';
seats['A3'] = 'FooBar';

// Static Members

class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

// Inheritance, Method Overriding and Polymorphism

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log('Walking...');
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking test...');
  }
}

class Teacher extends Person {
  override get fullName(): string {
    return `Professor ${super.fullName}`;
  }
}

class Principal extends Person {
  override get fullName(): string {
    return `Principal ${super.fullName}`;
  }
}

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Student(1, 'John', 'Doe'),
  new Teacher('John', 'Doe'),
  new Principal('John', 'Doe'),
]);

let teacher = new Teacher('John', 'Smith');
let student = new Student(1, 'Huzaifah', 'huzaifah@gmail.com');

// Abstract Classes and Methods

abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log('Rendering Circle!!!');
  }
}

let shape = new Circle(5, 'red');
shape.render();

// Interfaces

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error('Method not implemented.');
  }

  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}
