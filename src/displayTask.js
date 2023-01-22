import projects from "./projects";

export default function displayTask(index) {
  projects.saveProjectsToStorage(projects.projectList);
  let todoI = 0;
  projects.projectList[index].taskList.forEach((obj) => {
    const task = document.createElement("div");
    task.setAttribute("data-todo", todoI);
    task.classList.add("task");
    task.classList.add(obj.priority);
    task.textContent = obj.title;
    const rightSection = document.createElement("div");
    rightSection.textContent = obj.dueDate;
    document.querySelector(".task-container").appendChild(task);
    task.appendChild(rightSection);

    task.addEventListener("click", function () {
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
    todoI++;
  });
}
