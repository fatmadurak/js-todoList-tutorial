const todosList = document.querySelector(".todos-list"); // Tek bir öğeyi seçmek için querySelector kullanıyoruz.
const input1 = document.querySelector(".input1"); // Tek bir öğeyi seçmek için querySelector kullanıyoruz.
const btn = document.querySelector(".btn"); // Tek bir öğeyi seçmek için querySelector kullanıyoruz.
const closeIcon =document.getElementsByTagName(i);


function handleInputChange(e) {
  const value = e.target.value;
}

input1.addEventListener("change", handleInputChange);

btn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.classList.add("todo-item");

  const newIcon = document.createElement("i");
  newIcon.classList.add("bi", "bi-x-lg");
  newItem.textContent=input1.value;

  newItem.appendChild(newIcon);
  todosList.appendChild(newItem);
});




