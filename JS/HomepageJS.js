//USE stri; 

//document.addEventListener('DOMContentLoaded', function() {
//   var dropdown = document.querySelector('.dropdown');
//   dropdown.addEventListener('click', function() {
//     dropdown.classList.toggle('active');
//   });
// });

// // document.addEventListener('DOMContentLoaded', function() {
// //   var dropdown = document.querySelector('.dropdown');
// //   dropdown.addEventListener('click', function() {
// //     dropdown.classList.toggle('active');
// //   });
// // });

// function toggleDropdown(dropdownId) {
//   var dropdown = document.getElementById(dropdownId);
//   dropdown.classList.toggle('open');
// }

// // Register the function to be called when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Call the toggleDropdown function when the button is clicked for business hours
//   document.getElementById('hoursDropdown').addEventListener('click', function() {
//     toggleDropdown('hoursDropdown');
//   });

//   // Call the toggleDropdown function when the button is clicked for services
//   document.getElementById('servicesDropdown').addEventListener('click', function() {
//     toggleDropdown('servicesDropdown');
//   });
// });

// function toggleDropdown(event) {
//   var dropdown = event.target.parentNode;
//   dropdown.classList.toggle('open');
//   event.stopPropagation();
// }

// // Register the function to be called when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Close the dropdowns when clicking outside of them
//   document.addEventListener('click', function() {
//     var dropdowns = document.getElementsByClassName('dropdown');
//     for (var i = 0; i < dropdowns.length; i++) {
//       dropdowns[i].classList.remove('open');
//     }
//   });
// });
// function toggleDropdown(event) {
//   var dropdown = event.target.parentNode;
//   var dropdownIcon = dropdown.querySelector('#dropdownIcon');

//   dropdown.classList.toggle('open');
//   dropdownIcon.classList.toggle('rotate');
//   event.stopPropagation();
// }

// // Register the function to be called when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Close the dropdowns when clicking outside of them
//   document.addEventListener('click', function() {
//     var dropdowns = document.getElementsByClassName('dropdown');
//     var dropdownIcons = document.getElementsByClassName('fa-caret-down');

//     for (var i = 0; i < dropdowns.length; i++) {
//       dropdowns[i].classList.remove('open');
//       dropdownIcons[i].classList.remove('rotate');
//     }
//   });
// });
// Navigation toggle
document.getElementById('hamburger').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
  });
  
  // Testimonials carousel
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const showTestimonial = index => {
    testimonials.forEach((el, i) => el.classList.toggle('active', i === index));
  };
  
  document.getElementById('prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
  
  document.getElementById('next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
  // Hero slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const changeSlide = () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
};
setInterval(changeSlide, 5000); // Change slide every 5 seconds

