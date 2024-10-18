type Props = {
  array: any[];
};

function rndImage({ array }: Props) {
  const chosenArrays = [];

  let rnd = Math.floor(Math.random() * array.length);
  chosenArrays.push(array.splice(rnd, 1));
  rnd = Math.floor(Math.random() * array.length);
  chosenArrays.push(array.splice(rnd, 1));
  rnd = Math.floor(Math.random() * array.length);
  chosenArrays.push(array.splice(rnd, 1));

  return chosenArrays;
}

export { rndImage };
