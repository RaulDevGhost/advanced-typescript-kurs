import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto,
} from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

// export const editProduct = (id: string, changes: Product) => {
//   products.filter((item, i) => {
//     if (item.id === id) {
//       if (JSON.stringify(item) !== JSON.stringify(changes)) {
//         products[i] = changes;
//       }
//     }
//   });
// };

// myarray.filter(someobject => someobject.key == 'B')
//        .forEach(someobject => someobject.mark = "marked!")

export const editProduct = (
  id: Product['id'],
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};

export const deleteProduct = (id: Product['id']) => {
  products.filter((item, i) => {
    if (item.id === id) {
      products.splice(i, 1);
    }
  });
};

export const findProducts = (dto: FindProductDto): Product[] => {
  //READONLY ARRAY FOR TAGS
  // ERROR WHEN YOU TRY TO CHANGE PROPERTY - READONLY
  //  dto.color = 'blue';
  // dto.isNew = true;
  // dto.tags?.push()
  // dto.tags? = []
  return products;
};
