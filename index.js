// toggle nav menu when screen turn small
let menuButton = document.getElementById("menu");
let navigation = document.getElementById("navLinks");
let navBtn = document.getElementById("navBtn");

menuButton.addEventListener("click", ()=>{
  menuButton.classList.toggle("change");

  navigation.classList.toggle("active");
  navBtn.classList.toggle("active");

} );