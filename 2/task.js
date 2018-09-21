export default (str) => {
  const count = 0;
  const acc = '';
  const iter = (count, acc) => {
    return (str[count] === undefined ? acc : iter(count + 1, str[count] + acc));
  };
  return iter(0, '');
};
