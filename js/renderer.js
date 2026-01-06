window.renderPage = function () {
  const dropzone = document.getElementById("dropzone");
  dropzone.innerHTML = "";

  const components = appState.pages[appState.currentPage];

  components.forEach((comp, index) => {
    const def = ComponentRegistry[comp.type];
    const el = def.render(comp.props);

    el.style.cursor = "pointer";
    el.style.display = "inline-block";
    el.style.marginBottom = "6px";

    if (index === appState.selectedIndex) {
      el.style.outline = "2px solid blue";
    }

    el.addEventListener("click", (e) => {
      e.stopPropagation(); // 🔑 VERY IMPORTANT
      appState.selectedIndex = index;
      renderPage();
      renderPropsPanel();
    });

    dropzone.appendChild(el);
  });
};
