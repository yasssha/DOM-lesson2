const images = {
    titan:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708",
    blue: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311",
    white:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845706590",
    black:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845694698",
  };



const imgElem = document.querySelector('.img-box img');

const btns = document.querySelectorAll('.btn-box button');


btns.forEach(button => 
  button.onclick = () => {
    const color = button.innerHTML 
    let imgUrl;

    if (color === 'natural') {
      imgUrl = images.titan;
    } else if (color === 'white') {
      imgUrl = images.white;
    } else if (color === 'black') {
      imgUrl = images.black;
    } else if (color === 'blue') {
      imgUrl = images.blue;
    }

    imgElem.src = imgUrl;
  });

