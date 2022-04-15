

function getRandom (min, max) {
  if (min >= 0 && max >= min) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    throw new SyntaxError ('Ваше число меньше минимального!');
  }
}


function getRandomFloat (min,max,commas = 3) {
  const random = min + Math.random() * (max + 1 - min);
  if (min >=0 && max >= min) {
    return random.toFixed(commas) * 1;
  } else {
    throw 'Ваше число меньше минимального!';
  }
}

const  getRandomArrayElement = (elements) =>
  elements [getRandom(0,elements.length - 1)];

function newAuthor(number) {
  if (number < 10) {
    return {avatar: 'img/avatars/user0{number}.png'};
  }
  return {avatar: 'img/avatars/user0{number}.png'};
}

function getNewArray (arrays) {
  const newArray = [];
  for (let i=0; i <= getRandom(0,arrays.length-1); i++) {
    newArray[i] = arrays[i];
  }
  return newArray;
}

export {getRandom,getRandomFloat,getRandomArrayElement,newAuthor,getNewArray};
