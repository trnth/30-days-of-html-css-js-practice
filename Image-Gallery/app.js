var images = document.querySelectorAll(".image img");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var close = document.querySelector(".close");
var galleryImg = document.querySelector(".gallery_inner  img");
var gallery = document.querySelector(".gallery");
var currentIndex = 0;
function showGallery() {
  if (currentIndex == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }
  if (currentIndex == 7) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }

  galleryImg.src = images[currentIndex].src;
  gallery.classList.add("show");
}
images.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    showGallery();
  });
});
close.addEventListener("click", function () {
  gallery.classList.remove("show");
});
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});
prev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
});
next.addEventListener("click", function () {
  if (currentIndex < 7) {
    currentIndex++;
    showGallery();
  }
});
