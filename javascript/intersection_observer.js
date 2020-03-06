const name = document.querySelector(".name")
const occupation = document.querySelector(".occupation")
const sectionAbout = document.querySelector(".about-container")
const sectionProject = document.querySelector(".project-container")

const options = {
  root: null,     //it is the viewport
  threshold: 0.5, // 0 => 1 scale
  // rootMargin: if you want set margins to the viewport, you can write is as css margin values
};

const observer = new IntersectionObserver(function
  (entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
    // console.log(entry); // can also use .target .isIntersecting .intersectionRatio
      entry.target.classList.add("is-visible");
    } else {
      entry.target.classList.remove("is-visible")
    }
  });
}, options);

observer.observe(name);
observer.observe(occupation);
observer.observe(sectionAbout);
observer.observe(sectionProject);
