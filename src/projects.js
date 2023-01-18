import list from "../Images/list.png";
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

export default projects;
