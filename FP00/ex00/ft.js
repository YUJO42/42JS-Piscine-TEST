const ft = {
  //   log(param) {
  //     console.log(param);
  //   },
  log: console.log,
};

const chicken_vs_egg = (param) => () => {
  if (param === "egg") {
    return "chicken";
  } else if (param === "chicken") {
    return "egg";
  }
};

ft.log(2);
ft.log("Good Morning!");
ft.log(ft.log === console.log);

ft.log(chicken_vs_egg("egg"));
ft.log(chicken_vs_egg("chicken"));

console.log("-------------------------");

ft.log(chicken_vs_egg("egg")());
ft.log(chicken_vs_egg("chicken")());
