const sectionAbout = document.querySelector(".about-container")
const  name = document.querySelector(".name")
const  occupation = document.querySelector(".occupation")
const  projectTabs = document.querySelector(".project-container")

const options = {
  root: null, //it is the viewport
  threshold: 0.5, // 0 => 1 scale
  // rootMargin: if you want set margins to the viewport, you can write is as css margin values
};

const optionsAbout = {
  root: null, //it is the viewport
  threshold: 0.5, // 0 => 1 scale
  // rootMargin: if you want set margins to the viewport, you can write is as css margin values
};


const observer = new IntersectionObserver(function
(entries,observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
    console.log(entry.target);
    entry.target.classList.add("is-visible");
  } else {
    entry.target.classList.remove("is-visible")
  }
  });
}, options);

observer.observe(name);
observer.observe(occupation);
observer.observe(sectionAbout);
observer.observe(projectTabs);

// window.addEventListener('DOMContentLoaded',() => {
//   let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1
//   };
//   let observer = new IntersectionObserver(beTouching, options);
//   document.querySelectorAll(".show-on-scroll").forEach(e => {
//     observer.observe(e);
//   });
// });

// function beTouching(enteries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log(entry.target);
//       entry.target.classList.add("is-visible");
//     } else {
//       entry.target.classList.remove("is-visible");
//     }
//   });
// }

