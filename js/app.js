const btnToggle = document.querySelector("#toggleBtn");
const noscrollbar = document.querySelector(".no-scrollbar");
btnToggle.addEventListener("click", () => {
   const menudata = document.querySelector(".resnav");
   menudata.classList.toggle("hidden");
  
});


noscrollbar.addEventListener("mouseenter",()=>{
   noscrollbar.classList.toggle("no-scrollbar");
})


