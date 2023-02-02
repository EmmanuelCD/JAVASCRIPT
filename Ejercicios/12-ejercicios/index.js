const fibonnaci = (num) => {
  let a = 0,
    b = 1,
    c = num;

  for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};
