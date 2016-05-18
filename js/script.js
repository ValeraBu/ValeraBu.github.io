var formOpen = document.querySelector(".search-hotel");
   var popup = document.querySelector(".search-form");

   formOpen.addEventListener("click", function(event) {
     event.preventDefault();
     popup.classList.toggle("modal-content-show");
   });
