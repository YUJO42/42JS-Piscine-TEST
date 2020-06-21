class Stack {
  create() {
    this.stack = new Array();
  }

  empty() {
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

  push(data) {
    let len = 0;
    while (stack[len] !== undefined) {
      len++;
    }
    stack[len] = data;
  }

  peek() {
    let len = 0;
    while (stack[len] !== undefined) {
      len++;
    }
    if (len === 0) {
      return undefined;
    }
    return stack[len - 1];
  }

  pop() {
    let len = 0;
    let new_stack = [];

    while (stack[len] !== undefined) {
      len++;
    }
    if (len === 0) {
      return undefined;
    } else {
      for (let i = 0; i < len - 2; i++) {
        new_stack = stack[i];
      }
    }

    this.stack = new_stack;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);

console.log(stack);
