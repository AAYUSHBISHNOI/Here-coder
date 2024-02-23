/*****Year-Function****/
const currentYearElement = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

/********Show-Hide-Button-Function**********/
const showMoreBtn = document.querySelector(".show-more");
const hideBtn = document.querySelector(".hide");
const additionalContent = document.querySelector(".additional-content");

showMoreBtn.addEventListener("click", function () {
  additionalContent.style.display = "block";
  showMoreBtn.style.display = "none";
  hideBtn.style.display = "inline-block";
});

hideBtn.addEventListener("click", function () {
  additionalContent.style.display = "none";
  hideBtn.style.display = "none";
  showMoreBtn.style.display = "inline-block";
});

hideBtn.style.display = "none";

/*******Swipper-Slider-One********/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 165,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 130,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 180,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 110,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});
/********Swipper-Slider-Two**********/
var swiper = new Swiper(".myslider", {
  slidesPerView: 4,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 0,
    },
  },
});
/********Swipper-Slider-Three**********/
var swiper = new Swiper(".meetslider", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});
/********Swipper-Slider-Five**********/
var swiper = new Swiper(".meetslidertwo", {
  slidesPerView: 2,
  spaceBetween: 300,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 350,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

/******Navbar*********/
function openNav() {
  document.getElementById("Nav-Bar").classList.toggle("left_0");
  document.body.classList.toggle("overflow-hidden");
  document.querySelector(".menu").classList.toggle("cross");
}
const toggleButton = document.getElementById("toggleButton");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

let isOpen = false;

toggleButton.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    line1.classList.add("rotate-45", "translate-y-1");
    line2.classList.add("opacity-0");
    line3.classList.add("-rotate-45", "-translate-y-1");
  } else {
    line1.classList.remove("rotate-45", "translate-y-1");
    line2.classList.remove("opacity-0");
    line3.classList.remove("-rotate-45", "-translate-y-1");
  }
});
/******Nav-tabs*******/
function navtabs(tabs) {
  const tabshow = document.querySelectorAll(".tabshow");
  const tabbtn = document.querySelectorAll(".tabs button");
  tabshow.forEach((content) => {
    content.style.display = "none";
  });
  tabbtn.forEach((content) => {
    content.classList.remove("bg-white");
    content.classList.remove("text_black");
  });

  const selecttoshow = document.getElementById(tabs);
  selecttoshow.style.display = "block";

  const activeTab = document.querySelector(
    `button[onclick="navtabs('${tabs}')"]`
  );
  activeTab.classList.add("bg-white");
  activeTab.classList.add("text_black");
  activeTab.classList.add("duration-300");
}
navtabs("tab1");

/**********Nav-tabs-2***************/
function showTab(index) {
  const tabs = document.querySelectorAll(".tab-content");
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => tab.classList.add("hidden"));
  tabBtns.forEach((btn) => btn.classList.remove("active", "text_green"));
  tabs[index].classList.remove("hidden");
  tabBtns[index].classList.add("active", "text_green");
}

showTab(0);

/**********Onlick-image-change**************/
function changeImage(newSrc) {
  var firstImage = document.getElementById("firstImage");
  firstImage.src = newSrc; // Set the new image source here
  firstImage.alt = "New Image"; // Set the new image alt text here
}

/***************Onclick-video-and-text-change*****************/
function changeVideoAndContent(newVideoSrc, newName, newRole) {
  var mainVideoSource = document.getElementById("mainVideo");
  mainVideoSource.src = newVideoSrc;

  var mainVideoPlayer = document.getElementById("mainVideo");
  mainVideoPlayer.load();
  mainVideoPlayer.play();

  var mainContent = document.getElementById("mainContent");
  var mainName = mainContent.querySelector("p:first-child");
  var mainRole = mainContent.querySelector("p:last-child");

  mainName.textContent = newName;
  mainRole.textContent = newRole;
}
