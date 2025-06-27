(function (){
  'use strict';

  // При нажатии на кнопку — меняем заголовок
  document.getElementById("change-button").addEventListener("click", () => {
    const title = document.getElementById("main-title");
    title.textContent = "Заголовок изменён!";
    title.style.color = "crimson";
  });

// При наведении на блок — меняем цвет
  const hoverBox = document.getElementById("hover-box");
  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "#c0ffc0";
  });
  hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "lightgray";
  });

// При клике на абзац — показываем дату и время
  document.getElementById("datetime-paragraph").addEventListener("click", () => {
    const now = new Date();
    alert("Сейчас: " + now.toLocaleString());
  });
})()

