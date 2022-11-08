import { faker } from '@faker-js/faker';
import { Sizes } from './products/product.model';

import {
  products,
  addProduct,
  editProduct,
  deleteProduct,
  findProducts,
} from './products/product.service';

for (let i = 0; i < 5; i++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    image: faker.image.abstract(1234, 2345),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.datatype.array(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    categoryId: faker.datatype.uuid(),
  });
}

const changes = {
  title: 'Test One',
  stock: 69,
  size: 'S' as Sizes,
  description: 'fuck',
  color: 'OHHHHHHHH',
  price: 1200,
};

editProduct(products[0]['id'], changes);
console.log(products);
//deleteProduct(products[0]['id']);

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
});
