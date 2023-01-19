export default function taskDisplay() {
  const taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";
  const title = document.querySelector(".task-title");
  let index = this.getAttribute("data-index");
  title.textContent = projects.projectList[index].name;
  for (let i = 0; i < projects.projectList[index].taskList.length; i++) {
    const task = document.createElement("div");
    task.classList.add("task");
    task.textContent = projects.projectList[index].taskList[i].title;
    taskContainer.appendChild(task);
  }
}
