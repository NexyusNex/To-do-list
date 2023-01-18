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

const ToDo = () => {
  return {
    title,
    description,
    dueDate,
    priority,
  };
};

const projects = (() => {
  const projectList = ["task1", "task2", "task3"];

  function displayProjects(projectList) {
    const Container = document.querySelector(".projects");
    for (let i = 0; i < projectList.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.setAttribute("alt", "list");
      img.src = list;
      const text = document.createElement("div");
      text.textContent = projectList[i];

      card.appendChild(img);
      card.appendChild(text);
      Container.appendChild(card);
    }
  }
  return {
    projectList,
    displayProjects: displayProjects,
  };
})();

projects.displayProjects(projects.projectList);
