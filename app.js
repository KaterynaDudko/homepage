"use strict";

const catBtn = document.querySelector(".contact-info__paw-button");
const catModal = document.querySelector(".cat-modal");
const closeModalBtn = document.querySelector(".cat-modal__button--close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  catModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  catModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);

catBtn.addEventListener("click", () => {
  openModal();
});

closeModalBtn.addEventListener("click", () => {
  closeModal();
});
