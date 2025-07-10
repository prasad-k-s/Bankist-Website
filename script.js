"use strict";
const mediaQuery = window.matchMedia("(max-width: 685px)");

const tabSwitching = function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;
  document
    .querySelectorAll(".operations__tab")
    .forEach((tab) => tab.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  document
    .querySelectorAll(".operations__content")
    .forEach((content) =>
      content.classList.remove("operations__content--active")
    );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
};
function handleScreenChange(e) {
  if (e.matches) {
    document.querySelector(".operations").innerHTML = "";
    document.querySelector(".operations").innerHTML = `
    <div class="operations__tab-container">
          <div class="operations__conatiner">
            <button class="btn operations__tab operations__tab--1" data-tab="1">
              <span>01</span>Instant Transfers
            </button>
            <div
              class="operations__content operations__content--1 operations__content--active"
            >
              <div class="operations__icon operations__icon--1">
                <svg>
                  <use xlink:href="img/icons.svg#icon-upload"></use>
                </svg>
              </div>
              <h5 class="operations__header">
                Tranfser money to anyone, instantly! No fees, no BS.
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div class="operations__conatiner">
            <button class="btn operations__tab operations__tab--2" data-tab="2">
              <span>02</span>Instant Loans
            </button>

            <div
              class="operations__content operations__content--2 operations__content--active"
            >
              <div class="operations__icon operations__icon--2">
                <svg>
                  <use xlink:href="img/icons.svg#icon-home"></use>
                </svg>
              </div>
              <h5 class="operations__header">
                Buy a home or make your dreams come true, with instant loans.
              </h5>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div class="operations__conatiner">
            <button class="btn operations__tab operations__tab--3" data-tab="3">
              <span>03</span>Instant Closing
            </button>
            <div
              class="operations__content operations__content--3 operations__content--active"
            >
              <div class="operations__icon operations__icon--3">
                <svg>
                  <use xlink:href="img/icons.svg#icon-user-x"></use>
                </svg>
              </div>
              <h5 class="operations__header">
                No longer need your account? No problem! Close it instantly.
              </h5>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>`;
    document
      .querySelector(".operations__tab-container")
      .removeEventListener("click", function (e) {
        tabSwitching(e);
      });
    // Disable animations or adjust layout
  } else {
    // Enable animations or adjust layout
    document.querySelector(".operations").innerHTML = "";
    document.querySelector(".operations").innerHTML = `
    <div class="operations__tab-container">
          <button
            class="btn operations__tab operations__tab--1 operations__tab--active"
            data-tab="1"
          >
            <span>01</span>Instant Transfers
          </button>
          <button class="btn operations__tab operations__tab--2" data-tab="2">
            <span>02</span>Instant Loans
          </button>
          <button class="btn operations__tab operations__tab--3" data-tab="3">
            <span>03</span>Instant Closing
          </button>
        </div>
        <div
          class="operations__content operations__content--1 operations__content--active"
        >
          <div class="operations__icon operations__icon--1">
            <svg>
              <use xlink:href="img/icons.svg#icon-upload"></use>
            </svg>
          </div>
          <h5 class="operations__header">
            Tranfser money to anyone, instantly! No fees, no BS.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="operations__content operations__content--2">
          <div class="operations__icon operations__icon--2">
            <svg>
              <use xlink:href="img/icons.svg#icon-home"></use>
            </svg>
          </div>
          <h5 class="operations__header">
            Buy a home or make your dreams come true, with instant loans.
          </h5>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div class="operations__content operations__content--3">
          <div class="operations__icon operations__icon--3">
            <svg>
              <use xlink:href="img/icons.svg#icon-user-x"></use>
            </svg>
          </div>
          <h5 class="operations__header">
            No longer need your account? No problem! Close it instantly.
          </h5>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>`;

    document
      .querySelector(".operations__tab-container")
      .addEventListener("click", function (e) {
        tabSwitching(e);
      });
  }
}

// Initial check
handleScreenChange(mediaQuery);

// Listen for future changes
mediaQuery.addEventListener("change", handleScreenChange);
///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const nav = document.querySelector(".nav");

//Tabbed Component

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Button Scroll
btnScrollTo.addEventListener("click", function (e) {
  // const s1coords = section1.getBoundingClientRect();

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth",
  // });
  section1.scrollIntoView({ behavior: "smooth" });
});

//Page Navigation

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
const smoothScroll = function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    if (id === "#") return;
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};
document
  .querySelector(".nav__links")
  .addEventListener("click", (e) => smoothScroll(e));

document.querySelector(".nav__links.sidebar").addEventListener("click", (e) => {
  console.log("scroll");

  e.preventDefault();
  smoothScroll(e);
  document.querySelector(".nav__links.sidebar").style.transform =
    "translateX(100%)";
  document.querySelector(".nav__links.sidebar").style.visibility = "hidden";
});

if (window.matchMedia("(hover: hover)").matches) {
  // Menu fade animation
  const fadeAnimation = function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav__link")) {
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".nav__link");
      const logo = link.closest(".nav").querySelector("img");

      siblings.forEach((el) => {
        if (el !== link) {
          el.style.opacity = this;
        }
      });
      logo.style.opacity = this;
    }
  };

  nav.addEventListener("mouseover", fadeAnimation.bind(0.5));
  nav.addEventListener("mouseout", fadeAnimation.bind(1));
}

//Sticky navigation

// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener("scroll", function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Reveal Sections
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
  rootMargin: `200px`,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//Lazy Loading Images
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach((img) => imgObserver.observe(img));

//Slider

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");
  let currentSlide = 0;
  let maxSlide = slides.length;

  const createDots = () => {
    slides.forEach((s, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `
      <button class="dots__dot" data-slide="${i}"></button>
      `
      );
    });
  };

  const gotoSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const activateDot = (slide) => {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const nextSlide = () => {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    gotoSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    gotoSlide(currentSlide);
    activateDot(currentSlide);
  };
  const init = () => {
    createDots();
    gotoSlide(0);
    activateDot(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      currentSlide = Number(e.target.dataset.slide);
      gotoSlide(currentSlide);
      activateDot(currentSlide);
    }
  });
};
slider();

document.querySelector(".menu-open").addEventListener("click", (e) => {
  e.preventDefault();
  // document.querySelector(".nav__links.sidebar").style.display = "flex";
  document.querySelector(".nav__links.sidebar").style.transform =
    "translateX(0)";
  document.querySelector(".nav__links.sidebar").style.visibility = "visible";
});
document
  .querySelector(".menu-close")
  .addEventListener("click", (e) => closeMenu(e));

const closeMenu = function (e) {
  e.preventDefault();
  document.querySelector(".nav__links.sidebar").style.transform =
    "translateX(100%)";
  document.querySelector(".nav__links.sidebar").style.visibility = "hidden";
};
