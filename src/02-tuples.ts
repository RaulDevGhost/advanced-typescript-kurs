const prices: (number | string)[] = [1, 2, 3, 'test'];

//tuples helps us to have an array with strong typing
const user: [string, number, boolean] = ['Irving', 20, true];
user.push('Arturo', 39, true);

//destructing the duple
const [username, age] = user;
console.log(user);
console.log(username);

//Array of objects
type ObjectsUser = {
  name: string;
  old: number;
  active: boolean;
};
type UserTypes = ObjectsUser[];
const usersArray: UserTypes = [{ name: 'Lennon', old: 50, active: true }];
usersArray.push({ name: 'Harrison', old: 40, active: false });

console.log(usersArray);

//TEST
type Pair<T, K> = [T, K];
type Pairs<T, K> = Pair<T, K>[];

const apple: Pair<number, number> = [2, 3];
const orange: Pair<number, number> = [3, 3];
const food: Pairs<number, number> = [apple, orange];
console.log(food);
