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

const task = list(0, "nexa");
const task1 = list(1, "mita");
const task2 = list(2, "pera");
const nexa = ToDo("aaa", "lala", "mika", "pera");
const nss = ToDo("nsdsda", "lala", "mika", "pera");
const nedd = ToDo("nexa", "lala", "mika", "pera");
projects.projectList.push(task);
task.taskList.push(nexa);
task.taskList.push(nss);
task.taskList.push(nedd);
projects.displayProjects(projects.projectList);
