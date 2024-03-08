const person = { firstName: 'Abigail', lastName: 'Nunez', hobby: 'Lettering' };
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'manager';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'customer service';
console.log("The person's previous job is:", person['previousJob']);

console.log('The complete person object:', person);
