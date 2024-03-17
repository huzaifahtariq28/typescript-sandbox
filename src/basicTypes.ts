// Annotation

let sales: number = 123_456_789;
let numbers: number[] = [0, 1, 2, 3];


// Tuples

let user: [number, string] = [1, 'Huzaifah'];


//Enums

enum size {
  Small = 1,
  Medium,
  Large,
}


// Functions

function calculateTax(income: number): number {
  return income * 0.2;
}


// Objects

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Huzaifah',
  retire: (date: Date) => {
    console.log(date);
  },
};
