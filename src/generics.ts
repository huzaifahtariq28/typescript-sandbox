// Generic Classes

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair1 = new KeyValuePair<number, string>(1, 'a');
let pair2 = new KeyValuePair<string, string>('1', 'a');
let pair3 = new KeyValuePair(1, 2);

// Generic Functions

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numberArray = ArrayUtils.wrapInArray(1);
let stringArray = ArrayUtils.wrapInArray('1');

// Generic Interfaces

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  console.log(`Fetching ${url}...`);
  return { data: null, error: null };
}

interface User1 {
  username: string;
}

interface Product {
  title: string;
}

let userResults = fetch<User>('url');
let productResults = fetch<Product>('url');

// Generic Constraints

function echo<T extends number | string>(value: T): T {
  return value;
}

echo(1);

// Extending Generic Classes

interface StoreProduct {
  name: string;
  price: number;
}

// Type Mapping

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

let readOnlyProduct: ReadOnly<StoreProduct> = {
  name: 'a',
  price: 1,
};

type Optional<T> = {
  [K in keyof T]?: T[K];
}

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
}

class Store<T> {
  public _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<StoreProduct>();
store.add({
  name: 'a',
  price: 1,
});
store.find('name', 'a');
store.find('price', 1);

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let compressibleStore = new CompressibleStore<StoreProduct>();

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  findProduct(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<StoreProduct> {
  filterByCategory(category: string): StoreProduct[] {
    console.log(`Filtering by category: ${category}`);
    return [];
  }
}
