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
let flag = false;
let myActive;
const autoPlay = () => {
  clearInterval(timerAutoPlay);
  timerAutoPlay = setInterval(async () => {
console.log('bug', goal)
    if (!flag) {
  await awaitDelay(1000)

      for (let index = 0; index < sliderItem; index++) {
        if (sliderItem[index].classList.contains("flag")) {
          sliderItem[index].classList.remove("flag");
        }
      }

      if (goal > listELementImage.length - 1) {
        sliderWrapper.style.display = "none";
        sliderWrapper.style.opacity = 0;
        sliderContainer.style.transform = `translate3d(0px, ${pos}px,0px)`;
        await awaitDelay(2000);
        sliderWrapper.style.opacity = 1;
        goal = 0;

        bossImage.style.backgroundImage = `url(${listELementImage[goal].src})`;

        pos = 0;
        console.log("pos", pos);
      } else {
        pos = pos + -100;
        // console.log("goal", goal);
        listELementImage[goal].style.opacity = 1;
        sliderContainer.style.transform = `translate3d(0px, ${pos}px,0px)`;
        sliderItem[goal].classList.add("active");
        sliderItem[goal].classList.add("flag");
        myActive = goal;
        sliderWrapper.style.display = "flex";

        // sliderItem[goal].style.boxShadow =
        //   "rgba(255, 255, 255, 0.8) 0px 0px 7px 8px";
        bossImage.style.backgroundImage = `url(${listELementImage[goal].src})`;
        await awaitDelay(1200);
        listELementImage[goal].style.opacity = ".5";
        sliderItem[goal].classList.remove("active");

        goal++;
      }
    } else {

  await awaitDelay(1500)
}
  }, 1500);
};

const getPositionGoalElementActive = async (a) => {
 

  let elementClickData = Number(a.dataset.active);
  let eleFlag = document.querySelectorAll(".slider-item")[goal];
  eleFlag.classList.remove("active");
  goal = elementClickData;
  sliderItem[goal].classList.add("active");
  let elementPrevData = Number(eleFlag.dataset.active);
  flag = true;

  if (elementClickData < elementPrevData) {
    let chenhLech =   elementClickData - elementPrevData;
    // console.log(chenhLech)
    pos = pos - 100 * -1;

    sliderContainer.style.transform = `translate3d(0px, ${pos}px,0px)`;
    bossImage.style.backgroundImage = `url(${listELementImage[goal].src})`;
  } else {
    let chenhLech = elementPrevData - elementClickData;
    // console.log(elementClickData, elementPrevData);
    pos = pos + 100 * chenhLech;
    sliderContainer.style.transform = `translate3d(0px, ${pos}px,0px)`;
    bossImage.style.backgroundImage = `url(${listELementImage[goal].src})`;
  // console.log("debug", chenhLech);
  }
  // console.log(eleFlag.dataset.active)

  // let topElement = a.getBoundingClientRect().top
  await awaitDelay(1500)
  flag = false;

  // console.log('global check', flag)
};

autoPlay();
