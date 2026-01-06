window.renderPage = function () {
  const dropzone = document.getElementById("dropzone");
  dropzone.innerHTML = "";

  const components = appState.pages[appState.currentPage];

  components.forEach(comp => {
    const def = ComponentRegistry[comp.type];
    const el = def.render(comp.props);
    dropzone.appendChild(el);
  });
};

