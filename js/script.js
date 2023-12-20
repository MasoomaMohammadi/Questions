let iconSum = document.getElementById("sum-icon");
let iconMine = document.getElementById("mine-icon");
// let icons = document.getElementById("icon");
let text = document.getElementById("text");

// box-2
let iconSum2 = document.getElementById("sum-icon-2");
let iconMine2 = document.getElementById("mine-icon-2");
let text2 = document.getElementById("text-2");

// box-3
let iconSum3 = document.getElementById("sum-icon-3");
let iconMine3 = document.getElementById("mine-icon-3");
let text3 = document.getElementById("text-3");


//================================
iconSum.addEventListener("click", function () {
  text.style.display = 'block';
  iconMine.style.display = 'block';
  iconSum.style.display = 'none';
})

iconMine.addEventListener("click", function () {
  text.style.display = 'none';
  iconMine.style.display = 'none';
  iconSum.style.display = 'block';
})
//===========================================
iconSum2.addEventListener("click", function () {
  text2.style.display = 'block';
  iconMine2.style.display = 'block';
  iconSum2.style.display = 'none';
})

iconMine2.addEventListener("click", function () {
  text2.style.display = 'none';
  iconMine2.style.display = 'none';
  iconSum2.style.display = 'block';
})
//====================================================
iconSum3.addEventListener("click", function () {
  text3.style.display = 'block';
  iconMine3.style.display = 'block';
  iconSum3.style.display = 'none';
})

iconMine3.addEventListener("click", function () {
  text3.style.display = 'none';
  iconMine3.style.display = 'none';
  iconSum3.style.display = 'block';
})
//====================================

// iconSum.addEventListener('click', () => {
//   if (text.style.display === "block") {
//     text.style.display = "none";
//     icons.classList.remove('hiden-icon');
//     icons.classList.add("blok-icon")
//   } else {
//     btn.style.display = "block";
//     icons.classList.remove("blok-icon");
//     icons.classList.add("hiden-icon");
//   }
// })

