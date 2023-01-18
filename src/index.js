import "./style.css";
//images
import logo from "../Images/logo.png";
import inbox from "../Images/inbox.png";
import today from "../Images/calendar-today.png";
import week from "../Images/calendar-week.png";
//objects
import projects from "./projects";
import ToDo from "./to-do";

const logoImg = document.querySelector("#logo");
logoImg.src = logo;

const inboxImg = document.querySelector("#inboximg");
inboxImg.src = inbox;

const todayImg = document.querySelector("#todayimg");
todayImg.src = today;

const weekImg = document.querySelector("#weekimg");
weekImg.src = week;

const nexa = ToDo("nexa", "lala", "mika", "pera");
projects.projectList.push(nexa);
projects.displayProjects(projects.projectList);
