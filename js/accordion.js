document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion__item");
  
    accordionItems.forEach(item => {
      const header = item.querySelector(".accordion__header");
      const content = item.querySelector(".accordion__content");
  
      header.addEventListener("click", function() {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
          content.style.maxHeight = "0";
        } else {
          // Закрываем все открытые пункты аккордеона
          accordionItems.forEach(accItem => {
            accItem.classList.remove("active");
            accItem.querySelector(".accordion__content").style.maxHeight = "0";
          });
  
          // Открываем текущий пункт аккордеона
          item.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });
  

  