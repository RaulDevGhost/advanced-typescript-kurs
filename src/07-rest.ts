//REST PARAMETERS
import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'nicobytes',
  role: ROLES.CUSTOMER,
};

//V0
export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

const rta = checkAdminRole();
console.log('checkAdminRole', rta);

//V1
export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};

const rta2 = checkRole(ROLES.ADMIN, ROLES.OWNER);
console.log('checkRole', rta2);

//V2
export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.OWNER]);
console.log('checkRoleV2', rta3);

//V3 REST PARAMETERS ...args
export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.OWNER, ROLES.CUSTOMER, ROLES.USER);
console.log('checkRoleV2', rta4);

//EXAMPLE javascript ohne TYPESCRIPT ---> function checkRoles // AUTH NODE backend AUTH

// const boom = require('@hapi/boom');

// const { config } = require('./../config/config');

// function checkApiKey(req, res, next) {
//   const apiKey = req.headers['api'];
//   if (apiKey === config.apiKey) {
//     next();
//   } else {
//     next(boom.unauthorized());
//   }
// }

// function checkAdminRole(req, res, next) {
//   const user = req.user;
//   if (user.role === 'admin') {
//     next();
//   } else {
//     next(boom.unauthorized());
//   }
// }

// function checkRoles(...roles) {
//   return (req, res, next) => {
//     const user = req.user;
//     if (roles.includes(user.role)) {
//       next();
//     } else {
//       next(boom.unauthorized());
//     }
//   }
// }

// module.exports = { checkApiKey, checkAdminRole, checkRoles }
