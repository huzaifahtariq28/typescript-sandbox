// Class Decorators

function Component(constructor: Function) {
  console.log('Component decorator called');
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log('Inserting the ccomponent in  the DOM');
  };
}

@Component
class ProfileComponent {}

// Parameterized Decorators

type ComponentOptions = {
  selector: string;
};

function Component1(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called');
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the ccomponent in  the DOM');
    };
  };
}

@Component1({ selector: '#my-profile' })
class ProfileComponent1 {}

// Decorator Composition

function Pipe(constructor: Function) {
  console.log('Pipe decorator called');
  constructor.prototype.pipe = true;
}

@Component1({ selector: '#my-profile' })
@Pipe
class ProfileComponent2 {}

// Method Decorators

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log('Before');
    original.call(this, ...args);
    console.log('After');
  };
}

class Person2 {
  @Log
  say(message: string) {
    console.log(`Person says ${message}`);
  }
}

let person2 = new Person2();
person2.say('Hello');

// Accessor Decorators

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === 'string' ? result.toUpperCase() : result;
  };
}

class Person3 {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person3 = new Person3('Huzaifah', 'Tariq');
console.log(person3.fullName);

// Property Decorators

function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} should be at least ${length} characters long`
          );
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User1 {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user1 = new User1('1234');
console.log(user1.password);

// Parameter Decorators

type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters);
