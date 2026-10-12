const likes = document.querySelectorAll(".likee");

likes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("liked");

    if (like.classList.contains("liked")) {
      like.textContent = "❤️";
    } else {
      like.textContent = "🤍";
    }
  });
});

// Qidiruv qismi
const inp = document.querySelector(".inp");
const cards = document.querySelectorAll(".cardd");

inp.addEventListener("input", () => {
  let inpTitle = inp.value.toLowerCase();

  cards.forEach((cardd) => {
    let userName = cardd.querySelector(".userName").textContent.toLowerCase();

    if (userName.includes(inpTitle)) {
      cardd.style.display = "block";
    } else {
      cardd.style.display = "none";
    }
  });
});

// Tungi rejim

const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});
