import { calculateTax } from './tax';
import * as _ from 'lodash';

let tax = calculateTax(10_000);
console.log(tax);

_.clone([1, 2, 3]);
