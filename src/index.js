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
  projects.displayProjects();
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
  console.log(projects.projectList);
  const PName = document.querySelector("#PName").value;
  const obj = list(listIndex, PName);
  projects.projectList.push(obj);
  listIndex++;
  projects.displayProjects(projects.projectList);
});

const addTBtn = document.querySelector("#addTask");
addTBtn.addEventListener("click", function () {
  const form = document.querySelector(".form");
  if (form.style.display !== "flex") {
    form.style.display = "flex";
  } else {
    form.style.display = "none";
  }
});
