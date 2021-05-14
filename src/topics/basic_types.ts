enum Status { ACTIVE }

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  active: number
} = {
  name: 'Ruslan',
  age: 45,
  hobbies: ['Games', 'Coding'],
  role: [2, 'author'],
  active: Status.ACTIVE,
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

const newLine: string = 'test';
console.log(newLine);
