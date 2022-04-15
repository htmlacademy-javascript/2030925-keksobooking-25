import {getRandom,getRandomArrayElement,getNewArray,newAuthor} from './util.js';
import {TYPE,CHECKIN,FEATURES,PHOTOS,LOCATION} from './data.js';


export function createOffer(number) {
  return {
    author: newAuthor(number),
    title: 'Объявление',
    address: `${LOCATION.lat},${LOCATION.lng}`,
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


