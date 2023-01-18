import list from "../Images/list.png";
const projects = (() => {
  const projectList = [];

  function displayProjects(projectList) {
    const Container = document.querySelector(".projects");
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
        displayProjects();
      });

      card.appendChild(img);
      card.appendChild(text);
      card.appendChild(deletebtn);

      card.addEventListener("click", function () {
        const content = document.querySelector(".content");
        let index = card.getAttribute("data-index");
        for (let i = 0; i < projects.projectList[index].taskList.length; i++) {
          content.textContent +=
            " " + projects.projectList[index].taskList[i].title;
        }
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
