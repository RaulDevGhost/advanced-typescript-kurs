export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10,
  };
};

//NULLISH-COALESCING
// the problem with || is that 0 is considered as false, and also the next examples:
// 0 === false
// '' === false
// false === false
//and that's why we want to work with ?? instead of ||
// but WHEN we really want the false and 0 (zero) to be set
// ?? just considered null or undefined

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);
