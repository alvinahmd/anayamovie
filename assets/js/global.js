'use strict';

const addEventOnElements = function (elements, eventType, callback){
  for (const elem of elements) elem.addEventListener(eventType,callback);
}

const searchBox = document.querySelector(".search-box"); // Menggunakan selector class ".search-box"
const searchTogglers = document.querySelectorAll("[search-toggler]"); // Menggunakan selector atribut "[search-toggler]"
addEventOnElements(searchTogglers, "click", function(){
  searchBox.classList.toggle("active");
});
