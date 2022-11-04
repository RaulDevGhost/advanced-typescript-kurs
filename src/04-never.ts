const withoutEnd = () => {
  while (true) {
    console.log('nunca para de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not match');
};

console.log(example('hello'));
console.log(example([9, 10, 22]));
console.log(example(12122));
console.log(example('Not getting here'));

class Algo {
  miVariable = []; // (property) Algo.miVariable: never[]
}
