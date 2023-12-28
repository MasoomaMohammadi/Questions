let textShow = document.querySelectorAll(".div");

textShow.forEach((qustion) => {
  let btn = qustion.querySelector('.icon');
  btn.addEventListener("click", () => {
    textShow.forEach((item) => {
      if (item != qustion) {
        item.classList.remove("show-text");
      }
    })
    qustion.classList.toggle("show-text");
  })
})