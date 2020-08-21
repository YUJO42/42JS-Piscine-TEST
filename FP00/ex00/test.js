const ft = {
  log: console.log,
};

const chicken_vs_egg = (param) => () => {
  if (param === "egg") {
    return "chicken";
  } else if (param === "chicken") {
    return "egg";
  }
};

ft.log("-------------------------");

ft.log(2);
ft.log("Good Morning!");
ft.log(ft.log === console.log);

ft.log("-------------------------");

ft.log(chicken_vs_egg("egg"));
ft.log(chicken_vs_egg("chicken"));

ft.log("-------------------------");

ft.log(chicken_vs_egg("egg")());
ft.log(chicken_vs_egg("chicken")());

ft.log("-------------------------");
