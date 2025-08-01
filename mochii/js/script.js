//nol
const itemDetailModal = document.querySelector("#item-detail-modal");
const jalanmasuk = document.querySelectorAll(".jalanmasuk");

jalanmasuk.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

//satu
const itemDetailModal1 = document.querySelector("#item-detail-modal1");
const jalanmasuk1 = document.querySelectorAll(".jalanmasuk1");

jalanmasuk1.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal1.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal1 .close-icon1").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = "none";
  }
};

//dua
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const jalanmasuk2 = document.querySelectorAll(".jalanmasuk2");

jalanmasuk2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal2 .close-icon2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = "none";
  }
};

//tiga
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const jalanmasuk3 = document.querySelectorAll(".jalanmasuk3");

jalanmasuk3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal3 .close-icon3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = "none";
  }
};

//empat
const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const jalanmasuk4 = document.querySelectorAll(".jalanmasuk4");

jalanmasuk4.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal4.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal4 .close-icon4").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal4) {
    itemDetailModal4.style.display = "none";
  }
};

//lima
const itemDetailModal5 = document.querySelector("#item-detail-modal5");
const jalanmasuk5 = document.querySelectorAll(".jalanmasuk5");

jalanmasuk5.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal5.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal5 .close-icon5").onclick = (e) => {
  itemDetailModal5.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal5) {
    itemDetailModal5.style.display = "none";
  }
};
