// Question 1

function echoFinal<T>(arg: T) {
  return arg;
}

// Question 2

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

// Question 3

class Entity<T> {
  constructor(public id: T) {}
}
