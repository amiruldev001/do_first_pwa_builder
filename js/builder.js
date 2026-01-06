document.querySelectorAll(".component").forEach(item => {
  item.addEventListener("dragstart", e => {
    e.dataTransfer.setData("type", e.target.dataset.type);
  });
});

const dropzone = document.getElementById("dropzone");

dropzone.addEventListener("dragover", e => e.preventDefault());

dropzone.addEventListener("drop", e => {
  e.preventDefault();
  const type = e.dataTransfer.getData("type");

  appState.pages.home.push({
    type,
    props: { ...ComponentRegistry[type].defaultProps }
  });

  renderPage();
});

