import list from "../Images/list.png";
const projects = (() => {
  const projectList = [];

  function displayProjects(projectList) {
    const Container = document.querySelector(".projects");
    Container.innerHTML = "";
    if (projectList == null) {
      Container.innerHTML = "";
      return;
    }
    for (let i = 0; i < projectList.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-index", i);

      const img = document.createElement("img");
      img.setAttribute("alt", "list");
      img.src = list;
      const text = document.createElement("div");
      text.textContent = projectList[i].name;
      const deletebtn = document.createElement("button");
      deletebtn.textContent = "X";
      deletebtn.setAttribute("id", "deletebtn");
      deletebtn.addEventListener("click", function () {
        let index = card.getAttribute("data-index");
        projects.projectList.splice(index, 1);
        displayProjects(projectList);
      });

      card.appendChild(img);
      card.appendChild(text);
      card.appendChild(deletebtn);

      card.addEventListener("click", function () {
        const taskContainer = document.querySelector(".task-container");
        taskContainer.innerHTML = "";
        const title = document.querySelector(".task-title");
        let index = card.getAttribute("data-index");
        title.textContent = projects.projectList[index].name;
        projects.projectList[index].taskList.forEach((obj) => {
          const task = document.createElement("div");
          task.classList.add("task");
          task.textContent = obj.title;
          taskContainer.appendChild(task);
        });
      });

      Container.appendChild(card);
    }
  }
  return {
    projectList,
    displayProjects: displayProjects,
  };
})();

export default projects;
