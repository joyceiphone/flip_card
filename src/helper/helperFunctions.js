export const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].isFlipped = false;
  }
  for (let i = 0; i < arr.length; i++) {
    let j = parseInt(
      Math.random() * arr.length
    );
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

export const generateCards = (n) => {
  const ret = [];
  let index = 0;

  for (let i = 1; i <= n; i++) {
    ret.push({
      num: i,
      isFlipped: false,
      index: index,
    });
    ret.push({
      num: i,
      isFlipped: false,
      index: index + 1,
    });
    index += 2;
  }
  return ret;
};
