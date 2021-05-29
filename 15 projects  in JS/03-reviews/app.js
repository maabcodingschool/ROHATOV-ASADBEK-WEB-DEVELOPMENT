// local reviews data
const reviews = [
  {
    id: 1,
    name: "Iron Man",
    job: "Avenger",
    img:
      "https://i.pinimg.com/236x/51/c4/0e/51c40ef80be4468f1938212d45782de3.jpg",
    text:
      "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.",
  },
  {
    id: 2,
    name: "Groot",
    job: "Avenger",
    img:
      "https://i.pinimg.com/236x/51/25/70/5125700ff6fa745f6ab3a1ac8f9457b6.jpg",
    text:
      "Groot (/ɡruːt/) is a fictional character appearing in American comic books published by Marvel Comics. Created by Stan Lee, Larry Lieber and Jack Kirby, the character first appeared in Tales to Astonish #13 (November 1960). An extraterrestrial, sentient tree-like creature, the original Groot first appeared as an invader that intended to capture humans for experimentation.",
  },
  {
    id: 3,
    name: "Lamborghini",
    job: "Car",
    img:
      "https://i.pinimg.com/236x/71/0c/b9/710cb9b41f940781938f2c2b64e7f04b.jpg",
    text:
      "Automobili Lamborghini S.p.A. (Italian pronunciation: [lamborˈɡiːni]) is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.",
  },
  {
    id: 4,
    name: "BMW",
    job: "Car",
    img:
      "https://i.pinimg.com/236x/ce/37/f1/ce37f1ecb5240a0aa70f11348b3484b9.jpg",
    text:
      "Bayerische Motoren Werke AG, commonly referred to as BMW (German pronunciation: [ˌbeːʔɛmˈveː] (About this soundlisten)), is a German multinational corporation which produces luxury vehicles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
