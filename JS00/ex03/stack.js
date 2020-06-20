// 배열의 맨 끝 = stack.top() 으로 만들자
// 스택으로 사용할 배열을 리턴
function stack_create() {
  var stack = [];
  // 함수의 프로토타입이 존재하기 떄문에 이 안에 var hoisting을 이용해 일단 var로 선언을 했는데
  // 이게 의도한 바인지는 모르겠다. // 더 좋은 방법이 있는지 슬랙에 물어볼것.
}

// 스택이 비어있는지 확인
function stack_empty() {
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

// 스택 맨 위에 자료 추가
function stack_push(stack, data) {
  let len = 0;
  while (stack[len] !== undefined) {
    len++;
  }
  stack[len] = data;
}

// 맨 위의 자료를 리턴
function stack_peek(satck) {
  let len = 0;
  while (stack[len] !== undefined) {
    len++;
  }
  if (len === 0) {
    return undefined;
  }
  return satck[len - 1];
}

// 스택 맨 위의 자료를 지우는 함수
function stack_pop(stack) {
  let len = 0;
  while (stack[len] !== undefined) {
    len++;
  }
  if (len === 0) {
    return;
  } else {
    stack[len - 1] = undefined;
  }
}

(module.exports = stack_create), stack_empty, stack_peek, stack_pop, stack_push;
