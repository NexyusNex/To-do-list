import "./style.css";
//images
import logo from "../Images/logo.png";
import inbox from "../Images/inbox.png";
import today from "../Images/calendar-today.png";
import week from "../Images/calendar-week.png";
//objects
import projects from "./projects";
import list from "./list";
import ToDo from "./to-do";
import displayTask from "./displayTask";
import checkInput from "./checkInput";

const logoImg = document.querySelector("#logo");
logoImg.src = logo;

const inboxImg = document.querySelector("#inboximg");
inboxImg.src = inbox;

const todayImg = document.querySelector("#todayimg");
todayImg.src = today;

const weekImg = document.querySelector("#weekimg");
weekImg.src = week;

projects.displayProjects(projects.projectList);

const openPMenu = document.querySelector("#openPMenu");
openPMenu.addEventListener("click", function () {
  const PMenu = document.querySelector(".new-project");
  if (PMenu.style.display !== "flex") {
    PMenu.style.display = "flex";
  }
});

const closePMenu = document.querySelector("#closePMenu");
closePMenu.addEventListener("click", function () {
  const PMenu = document.querySelector(".new-project");
  if (PMenu.style.display !== "none") {
    PMenu.style.display = "none";
  }
});

var listIndex = 0;
const addPBtn = document.querySelector("#addProject");
addPBtn.addEventListener("click", function () {
  const PName = document.querySelector("#PName").value;
  const obj = list(listIndex, PName);
  projects.projectList.push(obj);
  listIndex++;
  projects.saveProjectsToStorage(projects.projectList);
  projects.displayProjects(projects.projectList);
});

const addTBtn = document.querySelector("#addTask");
addTBtn.addEventListener("click", function () {
  const form = document.querySelector(".form");
  form.setAttribute("isTask", 0);
  document.querySelector(".form-title").textContent = "Add a Task";
  if (form.style.display !== "flex") {
    form.style.display = "flex";
  }
});

const hideBtn = document.querySelector("#hide");
hideBtn.addEventListener("click", function () {
  const form = document.querySelector(".form");
  if (form.style.display !== "none") {
    form.style.display = "none";
  }
});

const finishBtn = document.querySelector("#finish");
finishBtn.addEventListener("click", function () {
  const title = document.querySelector("#title").value;
  const radio = document.querySelector('input[name="priority"]:checked').value;
  const dueDate = document.querySelector("#date").value;
  const desc = document.querySelector("#desc").value;

  if (checkInput(title)) return;
  if (checkInput(desc)) return;
  if (checkInput(dueDate)) return;
  if (checkInput(radio)) return;

  if (document.querySelector(".form").getAttribute("isTask") == 0) {
    const obj = ToDo(title, desc, dueDate, radio);
    const index = document.querySelector(".form").getAttribute("data-index");
    projects.projectList[index].taskList.push(obj);
    const taskContainer = document.querySelector(".task-container");
    taskContainer.innerHTML = "";
    const Ptitle = document.querySelector(".task-title");
    Ptitle.textContent = projects.projectList[index].name;
    displayTask(index);
  }
  if (document.querySelector(".form").getAttribute("isTask") == 1) {
    const index = document.querySelector(".form").getAttribute("data-index");
    const obj =
      projects.projectList[index].taskList[
        document.querySelector(".form").getAttribute("data-todo")
      ];
    obj.title = title;
    obj.priority = radio;
    obj.dueDate = dueDate;
    obj.description = desc;

    const taskContainer = document.querySelector(".task-container");
    taskContainer.innerHTML = "";
    displayTask(index);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "c") {
    console.log("pressed");
    localStorage.clear();
  }
  return;
});
