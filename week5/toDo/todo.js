window.addEventListener("load", ()  =>  {
const form = document.querySelector("#new-task-form");
const input = document.querySelector("new-task-input");
const list_el = document.querySelector("tasks")

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = input.value;
  if(!task){
      alert('Please add a task');
  }else {
      console.log("success");
  }
})

const list_el = document.createElement('div');
list_el.classList.add("tast");

const tast_content_el = document.createElement("div");
tast_content_el.classList.add("content");
task_content_el.innerHTML = task;

task_el.appendChild(task_content_el);
list_el.appendChild(task_el);


})