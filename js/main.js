
function getRandom (min, max) {
  if (min >= 0 && max >= min) {
    console.log (getRandom);
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    throw new SyntaxError ('Ваше число меньше минимального!');
  }
}
getRandom (1,11);

function getRandomFloat (min,max) {
  if (min >=0 && max >= min) {
    console.log (getRandomFloat);
    return Math.random() * (max-min) + min;
  } else {
    throw new SyntaxError ('Ваше число меньше минимального!');
  }
}
getRandomFloat(1,11);
