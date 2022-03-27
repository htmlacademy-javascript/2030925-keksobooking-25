
function getRandom (min, max) {
  if (min >= 0 && max >= min) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    throw new SyntaxError ('Ваше число меньше минимального!');
  }
}
getRandom (1,11);

function getRandomFloat (min,max,commas = 3) {
  const random = min + Math.random() * (max + 1 - min);
  if (min >=0 && max >= min) {
    return random.toFixed(commas);
  } else {
    throw new SyntaxError ('Ваше число меньше минимального!');
  }
}
getRandomFloat(1,11);


