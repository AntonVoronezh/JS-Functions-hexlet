const apply = (num, func, arg) => {

  if (num > 0) {
      while (0 < num) {
        num -= 1;
        const sum = apply(num, func, func(arg));
        return sum;
      }
  } else {
    return arg;
  }
}

export default apply;
