document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".box-radio");
    const boxes = document.querySelectorAll(".box");
  
    buttons.forEach((radio, index) => {
      radio.addEventListener("change", function () {
        boxes.forEach((box) => {
          box.classList.remove("active");
        });
  
        boxes[index].classList.add("active");
      });
    });
  });
  