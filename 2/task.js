export default (str) => {
  // BEGIN (write your solution here)
  let count = 0;
  let acc = '';

  const iter = (count, acc) => 
    str[count] === undefined ? acc : iter(count + 1, str[count] + acc);
 
  console.log(acc);

  // END

  return iter(0, '');
};
