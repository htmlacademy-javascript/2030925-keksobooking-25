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

const anotherOffers = 10;

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg' ,
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg' ,
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const location = {
  lat: getRandomFloat(35.65000, 35.70000),
  lng: getRandomFloat(139.70000, 139.80000),
};

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

function createOffer(number) {
  return {
    author: newAuthor(number),
    title: 'Объявление',
    address: `${location.lat},${location.lng}`,
    price: getRandom(20000,1500000),
    type: getRandomArrayElement(TYPE),
    rooms: getRandom(1,5),
    guests: getRandom(2,10),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKIN),
    features: getNewArray(FEATURES),
    description: 'Аппартаменты',
    photos: getNewArray(PHOTOS),
  };
}


const offers = [];
for (let i=1; i<=anotherOffers; i++) {
  offers.push (createOffer(i));
}
