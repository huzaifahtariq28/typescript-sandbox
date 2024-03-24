// Question 1

function Sauce(name: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = name;
  };
}
