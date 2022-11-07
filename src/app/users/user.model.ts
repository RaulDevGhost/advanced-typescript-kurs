import { BaseModel } from '../base.model';

export enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner',
  CUSTOMER = 'customer',
}

export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
