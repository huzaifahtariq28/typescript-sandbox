// Generic Classes

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair1 = new KeyValuePair<number, string>(1, 'a');
let pair2 = new KeyValuePair<string, string>('1', 'a');
let pair3 = new KeyValuePair(1, 2);

// Generic Functions