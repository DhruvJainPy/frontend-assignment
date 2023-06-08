const item = document.querySelector(".item");
const containers = document.querySelectorAll("div.item-container");
const subtitle = document.querySelector(".subtitle");

//To Drag and Drop the Element from one div to another

containers.forEach((container) => {
  //Style the Container when content is dragged over it.
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    container.classList.add("hover");
  });

  //Remove the Styling when content leaves it.
  container.addEventListener("dragleave", (e) => {
    e.preventDefault();
    container.classList.remove("hover");
  });

  //Add Content to container when drop event is fired.
  container.addEventListener("drop", () => {
    container.append(item);
    subtitle.innerText = "Content has been dragged to another div!";
    container.classList.remove("hover");
  });
});

//To implement reset functionality and reset the state.
const reset = () => {
  const container = containers[0];
  container.append(item);
  subtitle.innerText = "";
};
