const listELementImage = document.querySelectorAll(".slider-item > img");
const bossImage = document.querySelector(".boss > .boss-img");
const leftAnimation = document.querySelector(".left-animation");
const rightAnimation = document.querySelector(".right-animation");
const sliderContainer = document.querySelector(".slider-container");
const sliderItem = document.querySelectorAll(".slider-item");
const sliderWrapper = document.querySelector(".slider-wrapper");

let goal = 0;
bossImage.src = listELementImage[0].src;

let timerAutoPlay;
let timerAwaitDelay;
let setUp = false;
// delay func promise

const awaitDelay = (ms) =>
  new Promise((accept, reject) => {
    setTimeout(() => {
      accept();
    }, ms);
  });

let count = 0;
let pos = 0;
const autoPlay = () => {
  clearInterval(timerAutoPlay);
  timerAutoPlay = setInterval(async () => {
    // for(let index = 0; index < listELementImage.length; index++) {
    //     listELementImage[index].style.opacity = '.5'
    // }
    // if(goal == 0) {
    //  pos = pos + -155;

    //       bossImage.style.backgroundImage = `url(${listELementImage[goal].src})`;
    //       sliderContainer.style.transform = `translate3d(0px, ${pos}px,0px)`;
    //     // listELementImage[goal].style.opacity = 1
    // goal++
    //       console.log("pos", pos);

    // }
    if (goal > listELementImage.length - 1) {
      sliderWrapper.style.display = "none";

      sliderContainer.style.transform = `translate3d(0px, ${pos}px,0px)`;
      await awaitDelay(500);
      goal = 0;

      bossImage.style.backgroundImage = `url(${listELementImage[goal].src})`;


      pos = 0;
      console.log("pos", pos);
    } else {
      pos = pos + -185;
      console.log("goal", goal);
      listELementImage[goal].style.opacity = 1;
      sliderContainer.style.transform = `translate3d(0px, ${pos}px,0px)`;
      sliderWrapper.style.display = "flex";

      sliderItem[goal].style.boxShadow =
        "rgba(255, 255, 255, 0.8) 0px 0px 7px 8px";
      bossImage.style.backgroundImage = `url(${listELementImage[goal].src})`;
      await awaitDelay(1200);
      listELementImage[goal].style.opacity = ".5";
      sliderItem[goal].style.boxShadow = "none";

      goal++;
    }
  }, 1500);
};

autoPlay();
