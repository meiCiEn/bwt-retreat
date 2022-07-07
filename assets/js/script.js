function toggleNav() {
  let button = document.getElementById("menu-icon")
  let menu = document.getElementById("sliding-menu");
  let main = document.getElementById("main");
  menu.classList.toggle("active");
  button.classList.toggle("active");
  main.classList.toggle("dark");
}

function closeNav() {
  let button = document.getElementById("menu-icon")
  let menu = document.getElementById("sliding-menu");
  let main = document.getElementById("main");
  menu.classList.remove("active");
  button.classList.remove("active");
  main.classList.remove("dark");
}

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn-more");

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
  }
}

function readMore1() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("btn-more1");

  if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "Read more";
      moreText1.style.display = "none";
  } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Read less";
      moreText1.style.display = "inline";
  }
}



function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}document.getElementById("mySidenav").style.transitionDelay = "0.3s";

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.transitionDelay = "0.7s";
}

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav.desktop > a");
  const lineUp = document.querySelectorAll(".lineUp");
  window.onscroll = () => {
    let current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 300) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((a) => {
  a.classList.remove("active");
      if (a.classList.contains(current)) {
        a.classList.add("active");
      }
    });

  };


  // Animation on scroll into view
// Create the observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const lineUp = entry.target.querySelector('.lineUp');
    if (entry.isIntersecting) {
      lineUp.classList.add('lineUp-top');
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    lineUp.classList.remove('lineUp-top');
  });
});
// Tell the observer which elements to track
observer.observe(document.querySelector('.observe'));