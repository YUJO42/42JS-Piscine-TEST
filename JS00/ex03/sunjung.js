const stack_create = () => ({
    arr: []
  });
  ​
  const stack_empty = (stack) => (stack.arr[0] === undefined);
  ​
  const stack_push = (stack, data) => {
    if (stack_empty(stack))
      stack.arr = [1, data];
    else {
      stack.arr[0]++;
      stack.arr[stack.arr[0]] = data;
    }
  }
  ​
  const stack_peek = (stack) => (stack_empty(stack) ? undefined : stack.arr[stack.arr[0]]);
  ​
  const stack_pop = (stack) => {
    if (stack_empty(stack))
      return undefined;
    if (stack.arr[0] === 1)
      stack.arr = [];
    else {
      let new_stack = [stack.arr[0] - 1];
      for (let i = 1; i < stack.arr[0]; i++) {
        new_stack[i] = stack.arr[i];
      }
      stack.arr = new_stack;
    }
  }