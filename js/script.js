// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// keitka hamburger menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Typewriter Effect
const texts = ["Mahasiswa Sistem Informasi", "Penulis", "Wibu"];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter() {
  if (charcterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
    charcterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}
function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charcterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}
window.onload = typeWriter;

//Education
//Mengambil eleemnt timelin-item dan Gambar
const timelineItems = document.querySelectorAll(".timeline-item");
const educationImage = document.getElementById("education-image");

//Event Listener untuk setiap item di timeline
timelineItems.forEach((item) => {
  item.addEventListener("click", () => {
    //menghapus semua kelas 'active' dari semua item
    timelineItems.forEach((el) => el.classList.remove("active"));

    //Menambahkan kelas 'active ke item yang dilik
    item.classList.add("active");

    //Mengambil URL gambar dari data-image
    const newImage = item.getAttribute("data-image");

    //Mengganti gambar dengan efek transisi
    educationImage.classList.add("hidden");
    setTimeout(() => {
      educationImage.src = newImage;
      educationImage.classList.remove("hidden");
    }, 300);
  });
});

//Project
(function () {
  $(".flex-slide").each(function () {
    $(this).hover(
      function () {
        $(this).find(".flex-about").css({
          opacity: "1",
        });
      },
      function () {
        $(this).find(".flex-about").css({
          opacity: "0",
        });
      }
    );
  });
})();
