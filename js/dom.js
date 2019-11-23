const allProducts = arr => {
  arr.forEach(element => {
    console.log("this", element);
  // creation of html elements
  const list = document.getElementsByClassName("carousel__container")[0];
  const listItem = document.createElement('img');
  //const image = document.createElement('img');
  // set attributes of elements
  listItem.setAttribute('class', 'carousel__image');
  listItem.setAttribute('src',element.imageSrc);
  listItem.setAttribute('alt', element.productTitle);
  //append elements
  list.appendChild(listItem);
  //list.style.backgroundImage = `url(${element.imageSrc})`;
  //listItem.appendChild(image);
  });
};

window.onload = () => {
  allProducts(productDataWomens);
};

//console.log(productDataWomens)
