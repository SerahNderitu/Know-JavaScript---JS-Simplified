
// spread to put all the items from one array inside another array

const oldBooks = ["Code", "Debugging Tips"];
const newBooks = ["Know JS", "Basic CSS"];
const allBooks = [...oldBooks, ...newBooks];  

console.log(allBooks) // ['Code', 'Debugging Tips', 'Know JS', 'Basic CSS']


// Spread used to pass all the items from an array as arguments to a function or method

const frontEnd = ["HTML", "CSS", "JS"];
const backEnd = ["Python", "Django", "Postgres"];
frontEnd.push(...backEnd);

console.log(...frontEnd);  // HTML CSS JS Python Django Postgres
