import "./style.css";
import logo from "../Images/logo.png";
import inbox from "../Images/inbox.png";
import today from "../Images/calendar-today.png";
import week from "../Images/calendar-week.png";
import list from "../Images/list.png";

const logoImg = document.querySelector("#logo");
logoImg.src = logo;

const inboxImg = document.querySelector("#inboximg");
inboxImg.src = inbox;

const todayImg = document.querySelector("#todayimg");
todayImg.src = today;

const weekImg = document.querySelector("#weekimg");
weekImg.src = week;

const listImg = document.querySelector("#listimg");
listImg.src = list;

const ToDo = () => {
  return {
    title,
    description,
    dueDate,
    priority,
  };
};
