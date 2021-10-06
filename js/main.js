const share = document.querySelector(".info-author__share");
const shareActive = document.querySelector(".info-author__share-active");

share.addEventListener("click", () => {
  shareActive.classList.toggle("share-active");
});
