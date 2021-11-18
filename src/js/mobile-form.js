const buyBtn = document.querySelector(".header-button2");
const contactBtn = document.querySelector(".submit-btn");
const text = document.querySelector(".spoiler__text");
const textMore = document.querySelector(".mobile-contacts");

buyBtn.addEventListener("click", (e) => {
    textMore.classList.toggle("mobile-contacts-show");
    
    if (buyBtn.style.display === "none") {
    buyBtnstyle.display = "block";
  } else {
buyBtn.style.display = "none";
  }
});

contactBtn.addEventListener("click", (e) => {
    textMore.classList.toggle("mobile-contacts-show");
    
    if (buyBtn.style.display === "block") {
    buyBtnstyle.display = "none";
  } else {
buyBtn.style.display = "block";
  }
});