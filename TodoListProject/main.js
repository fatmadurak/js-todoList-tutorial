
//choose elements
const todosList = document.querySelector(".todos-list");
const input1 = document.querySelector(".input1");
const btn = document.querySelector(".btn");





function handleInputChange(e) {
  const value = e.target.value;
}

//button change

input1.addEventListener("change", handleInputChange);



function addandRemoveTodo() {
    const newItem = document.createElement("li");
    newItem.classList.add("todo-item");
  
    const newIcon = document.createElement("i");
    newIcon.classList.add("bi", "bi-x-lg");
    newItem.textContent = input1.value;
  
    newIcon.addEventListener("click", function () {
      todosList.removeChild(newItem); // "li" öğesini listeden kaldırır.
    });
  
    newItem.appendChild(newIcon);
    todosList.appendChild(newItem);
    input1.value=""
  }


//button click add todo

btn.addEventListener("click",addandRemoveTodo );


