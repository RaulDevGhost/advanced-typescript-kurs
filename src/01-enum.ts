//You can define also with number
export enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const TestUser: User = {
  username: 'Raul',
  role: ROLES.ADMIN,
};
