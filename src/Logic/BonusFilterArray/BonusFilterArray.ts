const filterArray = (arr1: number[], arr2: number[]) => {
  return arr1.filter((item) => arr2.includes(item));
};

export default filterArray;
