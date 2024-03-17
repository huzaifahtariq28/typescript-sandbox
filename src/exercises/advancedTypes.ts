// Question 1

type User = {
  name: string;
  age: number;
  occupation?: string;
};

let users: User[] = [
  { name: 'John Smith', age: 30, occupation: 'Software Engineer' },
  { name: 'Kate Müller', age: 28 },
];

// Question 2

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;


// Question 3

type WeekDays = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';