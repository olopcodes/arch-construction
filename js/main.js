// changing background on scroll with intersection observer
const targetSection = document.querySelector(".banner");
// const rootMargin = document.querySelector(".leaders");
const header = document.querySelector(".header");

const headerChangeOnScroll = (entries, obs) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // show when banner is not intersecting
      header.classList.add("active");
    } else {
      // no show when banner is intersecting
      header.classList.remove("active");
    }
  });
};

const options = {
  // look at the viewport
  root: null,
  // -500px margin before target is actually away from the viewport
  rootMargin: "-500px 0px 0px 0px",
  threshold: 0,
};
const observer = new IntersectionObserver(headerChangeOnScroll, options);
// when the target moves 200px up the screen
observer.observe(targetSection);
// ======================================================================================================

// show and close menu on click ===========================
const menuBtn = document.querySelector(".menu-btn");
const menuCloseBtn = document.querySelector(".menu-close");
const mobileNav = document.querySelector(".nav-mobile");

const showMobileNav = () => {
  document.querySelector(".nav-mobile").classList.add("show");
  document.querySelector(".nav-mobile__wrapper").classList.add("show");
};

const closeMobileNav = () => {
  document.querySelector(".nav-mobile").classList.remove("show");
  document.querySelector(".nav-mobile__wrapper").classList.remove("show");
};

menuBtn.addEventListener("click", showMobileNav);
menuCloseBtn.addEventListener("click", closeMobileNav);
mobileNav.addEventListener("click", (e) => {
  if (e.target.classList.value == "nav-mobile show") {
    closeMobileNav();
  }
});

// moving the banner slides =====================================================================================
const bannerBtns = document.querySelector(".banner__btns");
const bannerSlides = document.querySelectorAll(".banner__slide");
let bannerSlidesLength = bannerSlides.length - 1;
let currentSlide = 0;

const moveLeft = () => {
  if (currentSlide === 0) {
    currentSlide = 2;
  } else {
    currentSlide--;
  }
  moveSlide(currentSlide);
};

const moveRight = () => {
  if (currentSlide === 2) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  moveSlide(currentSlide);
};

function moveSlide(currentSlide) {
  bannerSlides.forEach((slide) => slide.classList.remove("active"));
  bannerSlides[currentSlide].classList.add("active");
}

bannerBtns.addEventListener("click", (e) => {
  if (e.target.id === "banner-left") {
    moveLeft();
  } else if (e.target.id === "banner-right") {
    moveRight();
  }
});
// end banner slider =================================================================================

// works slider ================================================================
const worksBtnsControl = document.querySelector(".works__slider-controls");
const worksSlides = document.querySelectorAll(".works__work");
const workBtns = document.querySelectorAll(".works__slider-btn");
const worksContainer = document.querySelector(".works__container");

const removeActiveClass = () => {
  worksSlides.forEach((s) => s.classList.remove("active"));
  workBtns.forEach((b) => b.classList.remove("active"));
};

const moveWorkSlidesAndBtns = (e) => {
  removeActiveClass();

  if (e.target.id === "works__btn-1") {
    worksSlides[0].classList.add("active");
    workBtns[0].classList.add("active");
    worksContainer.classList.remove("active-3");
    worksContainer.classList.remove("active-2");
  } else if (e.target.id === "works__btn-2") {
    worksSlides[1].classList.add("active");
    workBtns[1].classList.add("active");
    worksContainer.classList.add("active-2");
    worksContainer.classList.remove("active-3");
  } else if (e.target.id === "works__btn-3") {
    workBtns[2].classList.add("active");
    worksSlides[2].classList.add("active");
    worksContainer.classList.add("active-3");
    worksContainer.classList.remove("active-2");
  }
};

worksBtnsControl.addEventListener("click", (e) => {
  moveWorkSlidesAndBtns(e);
});

// end works slider ==============================
