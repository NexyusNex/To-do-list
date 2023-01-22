import projects from "./projects";

export default function displayTask(index) {
  projects.saveProjectsToStorage(projects.projectList);
  const taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";
  let todoI = 0;
  projects.projectList[index].taskList.forEach((obj) => {
    const task = document.createElement("div");
    task.setAttribute("data-todo", todoI);
    task.classList.add("task");
    task.classList.add(obj.priority);
    task.textContent = obj.title;
    const rightSection = document.createElement("div");
    rightSection.classList.add("right-section");
    rightSection.textContent = obj.dueDate;

    const editbtn = document.createElement("button");
    editbtn.classList.add("edit-btn");
    editbtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const form = document.querySelector(".form");
      const taskIndex = task.getAttribute("data-todo");
      form.setAttribute("data-todo", taskIndex);
      form.setAttribute("isTask", 1);
      document.querySelector(".form-title").textContent =
        "Edit Task " + obj.title;
      if (form.style.display !== "flex") {
        form.style.display = "flex";
      }
    });

    const checkbtn = document.createElement("button");
    checkbtn.classList.add("check-btn");
    checkbtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const taskIndex = task.getAttribute("data-todo");
      projects.projectList[index].taskList.splice(taskIndex, 1);
      displayTask(index);
    });
    rightSection.appendChild(editbtn);
    rightSection.appendChild(checkbtn);
    task.appendChild(rightSection);
    document.querySelector(".task-container").appendChild(task);

    todoI++;
  });
}
