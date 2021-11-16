let more = document.querySelectorAll('.spoiler-more-btn');

for (let i = 0; i < more.length; i++){
    more[i].addEventListener('click', function () {
        more[i].parentNode.classList.toggle('more-open')
    })
}

// const readMoreBtn = document.querySelector(".spoiler-more-btn");
// const text = document.querySelector(".spoiler__text");
// const textMore = document.querySelector(".spoiler__text-more");

// readMoreBtn.addEventListener("click", (e) => {
//     textMore.classList.toggle("spoiler__text-more-open");
    
// });
