let showItems = document.getElementsByClassName("carousel__image");
let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let totalItems; //this is initially set to the length of arr displaying images
let slide = 1;
let widthMatch = window.matchMedia("(min-width: 1024px)");
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
const initialDisplay = () => {
  showItems[0].style.display = 'initial';
  showItems[1].style.display = 'initial';
  showItems[2].style.display = 'initial';
}
const setBtnEventlisteners = () => {
  const prev = document.getElementsByClassName("carousel__btn--left")[0];
  const next = document.getElementsByClassName("carousel__btn--right")[0];
  const search = document.getElementsByClassName("submit-btn")[0];
  
  
  if(width >= 1024){
    prev.addEventListener("click", fullScreenMovePrev);
    next.addEventListener("click", fullScreenMoveNext);
  } else {
    prev.addEventListener("click", movePrev);
    next.addEventListener("click", moveNext);
  }
  
  search.addEventListener("click", searchResults);
};
const moveNext = () => {
  if (count === showItems.length - 2) return;
  showItems[totalItems].style.transform = `translateX(${400}px)`;
  totalItems--;
  count++;
};
const fullScreenMoveNext = () => {
  console.log("The morning has started Next");
  if(slide > (showItems.length-2)) slide = 1;
  console.log(showItems.length);
  let current = showItems[slide];
  let added = slide + 2;
  console.log('This is added', added);
  current.style.display = 'initial';
  if(slide > 1)showItems[slide-2].style.display = 'none'
  current.previousSibling.style.display = 'none';
  current.nextSibling.style.display = 'initial';
  showItems[added].style.display = 'initial';
  console.log('This is the first', slide);
  slide += 2; 
  console.log('This is the second slide', slide);
  console.log(showItems); 
}
const movePrev = () => {
  if (count === 0) return;
  showItems[totalItems + 1].style.transform = `rotateY(-${5}deg)`;
  totalItems++;
  count--;
};
const fullScreenMovePrev = () => {
  console.log("Lets go back to the previous screen");
  
  
  

  
}
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
  //for fullscreen - set 3 images to display
  if(width >= 1024) initialDisplay();
};
