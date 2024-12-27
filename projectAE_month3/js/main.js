// SLIDER BLOCK

// const slides = document.querySelectorAll(".slide");
// const next = document.querySelector("#next");
// const prev = document.querySelector("#prev");
// const sliderImage = document.querySelector('.slider_image');
// let index = 0;

// const fetchSliderData = async () => {
//     try {
//         const response = await fetch('../data/slider.json');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching slider data:', error);
//     }
// };

// const updateSlideContent = (sliderData, i) => {
//     const slide = slides[i];
//     const img = slide.querySelector(".slider_image img");
//     const title = slide.querySelector(".slide-title");
//     const description = slide.querySelector(".slide-description");

//     if (img) {
//         img.src = sliderData[i % sliderData.length].image;
//     }
//     if (title) {
//         title.textContent = sliderData[i % sliderData.length].title;
//     }
//     if (description) {
//         description.textContent = sliderData[i % sliderData.length].description;
//     }
// };

// const hideSlide = () => {
//     slides.forEach((slide) => {
//         slide.style.opacity = 0;
//         slide.classList.remove("active_slide");
//     });
// };

// const showSlide = (i = 0, sliderData) => {
//     updateSlideContent(sliderData, i);
//     slides[i].style.opacity = 1;
//     slides[i].classList.add("active_slide");
// };

// const autoSlider = (i = 0, sliderData) => {
//     setInterval(() => {
//         i++;
//         if (i > slides.length - 1) {
//             i = 0;
//         }
//         hideSlide();
//         showSlide(i, sliderData);
//     }, 10000);
// };

// next.onclick = () => {
//     index < slides.length - 1 ? index++ : (index = 0);
//     hideSlide();
//     fetchSliderData().then(sliderData => showSlide(index, sliderData));
// };

// prev.onclick = () => {
//     index > 0 ? index-- : (index = slides.length - 1);
//     hideSlide();
//     fetchSliderData().then(sliderData => showSlide(index, sliderData));
// };

// document.addEventListener('DOMContentLoaded', async () => {
//     const sliderData = await fetchSliderData();
//     if (sliderData) {
//         hideSlide();
//         showSlide(index, sliderData);
//         autoSlider(index, sliderData);
//     }
// });




///////////////////////////////////////////////////

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const sliderImage = document.querySelector('.slider_image')
let index = 0;

const hideSlide = () => {
  slides.forEach((slide) => {
    slide.style.opacity = 0;
    slide.classList.remove("active_slide");
  });
};
const showSlide = (i = 0) => {
  slides[i].style.opacity = 1;
  slides[i].classList.add("active_slide");
};

hideSlide();
showSlide(index);

const autoSlider = (i = 0) => {
  setInterval(() => {
    i++;
    if (i > slides.length - 1) {
      i = 0;
    }
    hideSlide();
    showSlide(i);
  }, 10000);
};

next.onclick = () => {
  index < slides.length - 1 ? index++ : (index = 0);
  hideSlide();
  showSlide(index);
};

prev.onclick = () => {
  index > 0 ? index-- : (index = slides.length - 1);
  hideSlide();
  showSlide(index);
};

autoSlider(index);
