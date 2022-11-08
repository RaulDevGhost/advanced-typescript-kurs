import { Product } from './product.model';

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

//for create a new type with only the types select with PICK
//and OMIT is for omit types
type example = Pick<Product, 'color' | 'description'>;

//PARTIAL makes all the types optionals ?
//interface differs from Types because in interface we can extends
export interface UpdateProductDto extends Partial<CreateProductDto> {}

type example2 = Required<Product>;

export interface FindProductDto extends Readonly<Partial<Product>> {}

type example3 = Readonly<Product>;
