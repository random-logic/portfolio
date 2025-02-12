export function* range(start: number, stop: number, step: number = 1): Generator<number> {
  if (step > 0) {
    for (let i = start; i < stop; i += step) {
      yield i;
    }
  }
  else if (step < 0) {
    for (let i = start; i > stop; i -= step) {
      yield i;
    }
  }
}

export function* zip<T, U>(arr1: Array<T>, arr2: Array<U>): Generator<[T, U]> {
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    yield [arr1[i], arr2[i]];
  }
}

export function mapKElements<T, U>(arr: Array<T>, k: number, func: (subArr: Array<T>, idx: Array<number>) => U): Array<U> {
  const res = [];
  for (let i = 0; i < arr.length; i += k) {
    const j = Math.min(arr.length, i + k);
    res.push(func(arr.slice(i, j), [...range(i, j)]));
  }
  return res;
}
