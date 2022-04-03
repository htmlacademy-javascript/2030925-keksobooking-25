
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

const type = {
  'palace' ,
  'flat' ,
  'house' ,
  'bungalow' ,
   'hotel'
}

const checkin = [
  '12:00',
  '13:00',
  '14:00'
]

const features = {
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
}

const photos = {
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg' ,
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg' ,
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
}

const author = {
  avatar: 'img/avatars/user' + xx + '.png'
};
let xx = '';
let authorArray = [];
let number = 1;

for (let i = 0 ; i >= 10 ; i++) {
  Math.floor(number/10) === 0? xx = '0${number}' : xx = String(number);
  author.avatar = `img/avatars/user' + xx  + '.png`;
  authorArray[i] = author.avatar;
  number++;
}

const location = {
  lat: getRandomFloat(35.65000,35.70000),
  lng: getRandomFloat(139.70000,139.80000)
}

const getRandomArrayElement = (elements) => {
  return elements [positiveInteger(0,elements.length - 1)]
}

const offer = {
return {
  title: 'Объявление',
  address: '$location.lat,$location.lng'
 price: getRandom(20000,1500000),
 type: getRandomArrayElement(type),
 rooms: getRandom(1,5),
 guests: getRandom(2,10),
checkin: getRandomArrayElement(checkin),
checkout: getRandomArrayElement(checkin),
features:  function () {
  return Array.from({length:positiveInteger(0,FEATURES.length - 1) },FEATURES)
},
description: 'Аппартаменты',
photos: function () {
  return Array.from({length:positiveInteger(0,PHOTOS.length - 1) },PHOTOS)
},
}
}

