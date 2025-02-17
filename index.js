let all = document.querySelector("#all");
let italian = document.querySelector("#Italian");
let chinese = document.querySelector("#Chinese");
let indian = document.querySelector("#Indian");
let bigContainers = document.querySelectorAll(".BigContainer");
all.addEventListener("click", () =>{
  console.log(" All Button was clicked");
  all.style.backgroundColor="rgb(2, 45, 83)";
  all.style.color="white";
  italian.style.backgroundColor="white";
  italian.style.color="rgb(2, 45, 83)";
  chinese.style.backgroundColor="white";
  chinese.style.color="rgb(2, 45, 83)";
  indian.style.backgroundColor="white";
  indian.style.color="rgb(2, 45, 83)";
});
// all.addEventListener("double click", () =>{
//   console.log(" All Button was clicked");
//   all.style.backgroundColor="white";
//   all.style.color="rgb(2, 45, 83)";
// });
italian.addEventListener("click", () =>{
  console.log(" italian Button was clicked");
  all.style.backgroundColor="white";
  all.style.color="rgb(2, 45, 83)";
  italian.style.backgroundColor="rgb(2, 45, 83)";
  italian.style.color="white";
  chinese.style.backgroundColor="white";
  chinese.style.color="rgb(2, 45, 83)";
  indian.style.backgroundColor="white";
  indian.style.color="rgb(2, 45, 83)";
  
});
chinese.addEventListener("click", () =>{
  console.log(" chinese Button was clicked");
  chinese.style.backgroundColor="rgb(2, 45, 83)";
  chinese.style.color="white";
  all.style.backgroundColor="white";
  all.style.color="rgb(2, 45, 83)";
  italian.style.backgroundColor="white";
  italian.style.color="rgb(2, 45, 83)";
  indian.style.backgroundColor="white";
  indian.style.color="rgb(2, 45, 83)";
});
indian.addEventListener("click", () =>{
  console.log(" indian Button was clicked");
  all.style.backgroundColor="white";
  all.style.color="rgb(2, 45, 83)";
  italian.style.backgroundColor="white";
  italian.style.color="rgb(2, 45, 83)";
  chinese.style.backgroundColor="white";
  chinese.style.color="rgb(2, 45, 83)";
  indian.style.backgroundColor="rgb(2, 45, 83)";
  indian.style.color="white";
});