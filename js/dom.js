var showItems = document.getElementsByClassName("carousel__image");
var totalItems; //this is initially set to the length of arr displaying images



const allProducts = arr => {
  arr.forEach(element => {
    const list = document.getElementsByClassName("carousel__container")[0];
    //creation of html element
    const listItem = document.createElement("img");
    // set attributes of elements
    listItem.setAttribute("class", "carousel__image");
    listItem.setAttribute("src", element.imageSrc);
    listItem.setAttribute("alt", element.productTitle);
    //append elements
    list.appendChild(listItem);
    listItem.addEventListener("click", () => {
      console.log("I've been clicked.");
    });
  });
  totalItems = arr.length -1;
};
const setBtnEventlisteners = () => {
  const prev = document.getElementsByClassName('carousel__btn--left')[0];
  const next = document.getElementsByClassName('carousel__btn--right')[0];

  prev.addEventListener('click', movePrev);
  next.addEventListener('click', moveNext);  
};
const moveNext = () => {
  showItems[totalItems].style.transform = `translateX(${300}px)`;
  totalItems--; 
};
const movePrev = () => {
  showItems[totalItems +1].style.transform = `translateX(-${5}px)`;
  totalItems++;
};
window.onload = () => {
  //render all images on screen
  allProducts(productDataWomens);
  //set EventListeners on buttons
  setBtnEventlisteners();
};

