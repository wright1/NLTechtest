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
  arr.forEach((element, i) => {
    const list = document.getElementsByClassName("carousel__container")[0];
    //creation of html element
    const listItem = document.createElement("img");
    // set attributes of elements
    listItem.setAttribute("class", "carousel__image");
    listItem.setAttribute("src", element.imageSrc);
    listItem.setAttribute("alt", element.productTitle);
    if(i< 4) listItem.className += " result";
    //append elements
    list.appendChild(listItem);
    listItem.addEventListener("click", (e) => {
      console.log("I've been clicked.");
      popUp(e)
    },false);
  });
  totalItems = arr.length - 1;
};
const initialDisplay = (arr) => {
  arr[0].style.display = 'initial';
  arr[1].style.display = 'initial';
  arr[2].style.display = 'initial';
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
  //if the value of slide +/- the length of the showItems array we reset it to 0
  if(slide > (showItems.length-2) || slide < 1) slide = 1;
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
  slide -= 2;
  const current = showItems[slide];
  // if(slide < 1){
  //   slide = showItems.length-2;
  //   showItems[0].style.display = 'none'
  //   current.previousSibling.style.display = 'initial';
  //   current.style.display = 'initial';
  //   current.nextSibling.style.display = 'initial';
  // }
  
  console.log(current, slide);
  if(slide > 1)showItems[slide-2].style.display = 'none'
  current.previousSibling.style.display = 'initial';
  current.style.display = 'initial';
  current.nextSibling.style.display = 'initial';
  
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
  const filterArr = ele => {
    return ele.productTitle.includes(result);
  };
  var resultArr = productDataWomens.filter(filterArr);
  console.log(resultArr);
  //display the results
  displayProducts(resultArr);
  //empty search bar
  input.value ="";
};
const popUp = (e) => {
  const product = e.target.alt;
  const findImage = ele => {
     return ele.productTitle === product
  }
  const resultObj = productDataWomens.filter(findImage);

  console.log(resultObj)
  

  console.log('does it get in here', e.target.alt);

}
window.onload = () => {  
  //render all images on screen
  displayProducts(productDataWomens);
  //set EventListeners on buttons
  setBtnEventlisteners();
  //for fullscreen - set 3 images to display
  if(width >= 1024) initialDisplay(showItems);
};
