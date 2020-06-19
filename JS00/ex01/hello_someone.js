export default function hello_someone(name) {
  if (typeof name === "number" || typeof name === "string") {
    console.log(`Hello ${name}!`);
  } else if (typeof name === "object") {
    console.log("Who are you?");
  } else {
    throw Error;
  }
}

// test code

// hello_someone("asd");
// hello_someone(123);
// hello_someone(null);
