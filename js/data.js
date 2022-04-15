import getRandomFloat from './util.js';
import createOffer from './main.js';


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

const LOCATION = {
  lat: getRandomFloat(35.65000, 35.70000),
  lng: getRandomFloat(139.70000, 139.80000),
};

const offers = [];
for (let i=1; i<=anotherOffers; i++) {
  offers.push (createOffer(i));
}

export {anotherOffers,TYPE,CHECKIN,FEATURES,PHOTOS,LOCATION,offers};

