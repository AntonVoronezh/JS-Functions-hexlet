const apply = (numarg, func, arg) => {
  let num = numarg;
  if (num > 0) {
    while (num > 0) {
      num -= 1;
      const sum = apply(num, func, func(arg));
      return sum;
    }
  } else {
    return arg;
  }
};

export default apply;
