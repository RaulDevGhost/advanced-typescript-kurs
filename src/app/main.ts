import { faker } from '@faker-js/faker';

import { products, addProduct } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    image: faker.image.abstract(1234, 2345),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.datatype.array(),
    category: {
      id: faker.datatype.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      name: faker.commerce.department(),
    },
  });
}

console.log(products);
