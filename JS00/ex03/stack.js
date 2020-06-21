const stack_create = () => ({
  stack: [],
});

function stack_empty(stack) {
  let len = 0;
  while (stack[len] !== undefined) {
    len++;
  }
  if (len === 0) {
    return true;
  } else {
    return false;
  }
}

function stack_push(stack, data) {
  let len = 0;
  while (stack[len] !== undefined) {
    len++;
  }
  stack[len] = data;
}

function stack_peek(stack) {
  let len = 0;
  while (stack[len] !== undefined) {
    len++;
  }
  if (len === 0) {
    return undefined;
  }
  return stack[len - 1];
}

function stack_pop(stack) {
  let len = 0;

  while (stack[len] !== undefined) {
    len++;
  }
  console.log(len);
  if (len === 0) {
    return undefined;
  } else {
    stack[len - 1] = undefined;
  }
  for (let i = 0; stack[i] === undefined; i++) {
    stack = [];
    stack[i] = stack[i];
  }
}

let stack = [1, 2, 3];
console.log(stack);
stack_pop(stack);
console.log(stack);

module.exports = {
  stack_empty: stack_empty,
  stack_push: stack_push,
  stack_peek: stack_peek,
  stack_pop: stack_pop,
};
