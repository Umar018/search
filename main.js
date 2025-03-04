const fromElement = document.querySelector("#search-form");
const todoFormElement = document.querySelector("#todo-form");
const todoLists = document.querySelector("#todo-list");
let todoInputElement = document.querySelector("#todo-input");
let searchInputElement = document.querySelector("#search-input");

const searchSesultList = document.querySelector("#search-result");

const todoList = [
  "Ali",
  "Bekzod",
  "Jasur",
  "Diyor",
  "Sarvar",
  "Rustam",
  "Shavkat",
  "Aziz",
  "Muzaffar",
  "Olim",
  "Jahongir",
  "Sherzod",
  "Kamron",
  "Umid",
  "Islom",
  "Abdulaziz",
  "Temur",
  "Shokir",
  "Farrukh",
  "Mirzo",
  "Malika",
  "Dilnoza",
  "Gulnoza",
  "Sevara",
  "Nilufar",
  "Madina",
  "Shahnoza",
  "Ruxsora",
  "Zarina",
  "Rayhona",
  "Laziza",
  "Ziyoda",
  "Shahzoda",
  "Umida",
  "Mohira",
  "Shirin",
  "Gulbahor",
  "Nodira",
  "Aziza",
  "Mubina",
];

document.addEventListener("DOMContentLoaded", function () {
  todoLists.innerHTML = "";
  todoList.forEach((name) => {
    const liElement = document.createElement("li");
    liElement.textContent = name;
    todoLists.appendChild(liElement);
  });
});

fromElement.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = searchInputElement.value.trim();

  searchSesultList.innerHTML = "";
  const data = todoList.filter((todo) => todo === value);

  if (data.length > 0) {
    const liElement = document.createElement("li");
    liElement.textContent = data[0];
    searchSesultList.appendChild(liElement);
  }
});

todoFormElement.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = searchInputElement.value.trim();

  searchSesultList.innerHTML = "";

  const newName = todoInputElement.value.trim();
  if (newName) {
    const liElement = document.createElement("li");
    liElement.textContent = newName;
    todoLists.appendChild(liElement);
    todoList.push(newName);
    todoInputElement.value = "";
  }
});
