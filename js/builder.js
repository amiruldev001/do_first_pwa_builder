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

window.renderPropsPanel = function () {
  const panel = document.getElementById("props-content");
  panel.innerHTML = "";

  const index = appState.selectedIndex;
  if (index === null) {
    panel.innerHTML = "<em>Select a component</em>";
    return;
  }

  const component = appState.pages[appState.currentPage][index];

  Object.keys(component.props).forEach(key => {
    const label = document.createElement("label");
    label.innerText = key;

    const input = document.createElement("input");
    input.value = component.props[key];

    input.addEventListener("input", e => {
      component.props[key] = e.target.value;
      renderPage();
      renderPropsPanel(); 
    });

    panel.appendChild(label);
    panel.appendChild(input);
  });
};


