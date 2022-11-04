// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. 
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// 1 
// const galleryListEl = document.querySelector('ul');

// const listElements = images.map(image => {
//   const galleryItemEl = document.createElement('li');
//   galleryItemEl.classList.add('img-item');
//   const galleryImgEl = document.createElement("img");
//   galleryImgEl.src = image.url;
//   galleryImgEl.alt = image.alt;

//   galleryItemEl.appendChild(galleryImgEl);

//   return galleryItemEl;
// });
// galleryListEl.append(...listElements);


//2

// const galleryListEl = document.querySelector("ul");
// const makeGallaryImg = galleryImg =>{
//   return galleryImg.map(image => {
  
//   const galleryItemEl = document.createElement("li");
//   galleryItemEl.classList.add("img-item");

//   const galleryImgEl = document.createElement("img");
//   galleryImgEl.src = image.url;
//     galleryImgEl.alt = image.alt;
//     galleryItemEl.appendChild(galleryImgEl);
//     console.log(galleryItemEl);
//   return galleryItemEl;

// });

// }

// const elements = makeGallaryImg(images);
// galleryListEl.append(...elements);


//3


const galleryElement = document.querySelector('ul');

const elementImg = images.map(({ url, alt }) => `<li class = "item"><img src = '${url} alt = '${alt}' width="320"></li>`).join("");
galleryElement.insertAdjacentHTML("afterbegin", elementImg);

document.body.style.margin = '0px';
galleryElement.style.cssText = 
`display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  `;



