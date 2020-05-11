export default function orderByProps(obj, sort) {
  const firstSort = {};
  const secondSort = {};
  Object.keys(obj).sort().forEach((el) => {
    secondSort[el] = obj[el];
  });
  for (let i = 0; i < sort.length; i += 1) {
    for (const prop in obj) {
      if (sort[i] === prop) {
        firstSort[prop] = obj[prop];
        delete secondSort[prop];
      }
    }
  }
  const merged = { ...firstSort, ...secondSort };
  return merged;
}
