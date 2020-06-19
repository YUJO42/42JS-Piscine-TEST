export default function hello_someone(name) {
  if (Number.isNaN(name) === true) {
    console.log("Age is just a number");
  } else if (typeof name === "string") {
    if (name === "") {
      console.log("Who are you?");
    } else {
      console.log(`My name is ${name}`);
    }
  } else if (typeof name === "number") {
    if (name <= 0) {
      console.log("I`m Benjamin Button");
    } else {
      console.log(`My age is ${name}`);
    }
  } else if (typeof name === "undefined") {
    console.log("Nobody can define me!");
  } else if (typeof name === "object") {
    console.log("I am null and void");
  }
}
