const stack_create = require("./stack");
const { stack_empty, stack_pop, stack_push, stack_peek } = require("./stack");
const stack = require("./stack");

describe("empty", () => {
  it("empty test1", () => {
    expect(stack_empty([1, 2])).toEqual(false);
  });
  it("empty test2", () => {
    expect(stack_empty([])).toEqual(true);
  });
  it("empty test3", () => {
    expect(stack_empty([1])).toEqual(false);
  });
});

describe("push", () => {
  it("push test1", () => {
    let stack = [];
    stack_push(stack, 1);
    expect(stack).toEqual([1]);
  });
  it("push test2", () => {
    let stack = [1, 2, 3];
    stack_push(stack, 5);
    expect(stack).toEqual([1, 2, 3, 5]);
  });
  it("push test3", () => {
    let stack = [1, 2, 3, 4, 5];
    stack_push(stack, 10);
    expect(stack).toEqual([1, 2, 3, 4, 5, 10]);
  });
});

describe("peek", () => {
  it("peek test1", () => {
    let stack = [1];
    expect(stack_peek(stack)).toEqual(1);
  });
  it("peek test2", () => {
    let stack = [];
    expect(stack_peek(stack)).toEqual(undefined);
  });
  it("peek test3", () => {
    let stack = [1, 2, 3, 4, 5];
    expect(stack_peek(stack)).toEqual(5);
  });
});

// pop test 방법 찾기
describe("pop", () => {
  it("pop test1", () => {
    let stack = [1, 2];
    stack_pop(stack);
    expect(stack).toEqual([1]);
  });
  it("pop test2", () => {
    let stack = [1];
    stack_pop(stack);
    expect(stack).toEqual([0]);
  });
  it("pop test3", () => {
    let stack = [1, 2, 3, 4, 5];
    stack_pop(stack);
    stack_pop(stack);
    stack_pop(stack);
    stack_pop(stack);
    expect(stack).toEqual([1]);
  });
});
