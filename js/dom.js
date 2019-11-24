let showItems = document.getElementsByClassName("carousel__image");
let totalItems; //this is initially set to the length of arr displaying images
let count = 0;

const displayProducts = arr => {
  const list = document.getElementsByClassName("carousel__container")[0];
  //remove the previous list of images
  while (list.firstChild) {
    list.firstChild.remove();
  };
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
  totalItems = arr.length - 1;
};
const setBtnEventlisteners = () => {
  const prev = document.getElementsByClassName("carousel__btn--left")[0];
  const next = document.getElementsByClassName("carousel__btn--right")[0];
  const search = document.getElementsByClassName("submit-btn")[0];

  prev.addEventListener("click", movePrev);
  next.addEventListener("click", moveNext);
  search.addEventListener("click", searchResults);
};
const moveNext = () => {
  if (count === showItems.length - 2) return;
  showItems[totalItems].style.transform = `translateX(${300}px)`;
  totalItems--;
  count++;
};
const movePrev = () => {
  if (count === 0) return;
  showItems[totalItems + 1].style.transform = `rotateY(-${5}deg)`;
  totalItems++;
  count--;
};
const searchResults = () => {
  let input = document.getElementsByTagName("input")[0];
  //convert the user input to Title case
  const toTitleCase = phrase => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  let result = toTitleCase(input.value);
  //filter productDataWomens based on user input
  const filterEle = ele => {
    return ele.productTitle.includes(result);
  };
  const resultArr = productDataWomens.filter(filterEle);
  console.log(resultArr);
  //display the results
  displayProducts(resultArr);
};
window.onload = () => {
  //render all images on screen
  displayProducts(productDataWomens);
  //set EventListeners on buttons
  setBtnEventlisteners();
};
