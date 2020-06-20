const stack_create = require("./stack");

descive("stack create", () => {
  it("create stack test 1", () => {
    expect(stack_create()).toEqual([]);
  });
});
