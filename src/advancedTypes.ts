// Type Aliases

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let betterEmployee: Employee = {
  id: 1,
  name: 'Huzaifah',
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union Types

function kgToLbs(weight: string | number): number {
  if (typeof weight === 'number') return weight * 2.204;
  else return parseInt(weight) * 2.204;
}

kgToLbs(10);
kgToLbs('10kg');

// Intersection Types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Types

type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// Nullable Types

function greet(name: string | null | undefined) {
  if (name) console.log(`Hola, ${name.toUpperCase()}!`);
  else console.log('Hola!');
}

greet(null);

// Optional Chaining

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// Optional property access operator
console.log(`Customer ${customer?.birthday?.getFullYear()}`);

// Optional element access operator
// customer?.[0]

// Optional call
let log: any = null;
log?.('a');

// Nullish Coaelscing Operator

let speed: number | null = null;
let ride = {
  speed: speed ?? 10,
};

// Type Assertions

let phone1 = document.getElementById('phone') as HTMLInputElement;
let phone2 = <HTMLInputElement>document.getElementById('phone');

phone1.value;
phone2.value;

// Unknown Type

function render(document: unknown) {
  if (typeof document === 'string') console.log(document.toUpperCase());
}

// Never Type

function reject(message: string): never {
  throw Error(message);
}

function processEvents(): never {
  while (true) {
    // Read messages from a queue
  }
}

processEvents();
reject('...');
console.log('Hello World!');
