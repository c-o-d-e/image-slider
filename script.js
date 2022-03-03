const arrImages = [];
let i = 0;
const timeChange = 3000;
arrImages[0] = "./img/web1.png";
arrImages[1] = "./img/web2.png";
arrImages[2] = "./img/web3.png";
arrImages[3] = "./img/home1.png";

// console.log(arrImages);

function slideShow() {
  document.getElementById("img1").src = arrImages[i];

  if (i < arrImages.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(slideShow, timeChange);
}
slideShow();
