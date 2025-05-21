async function loadView(viewName) {
  const contentDiv = document.getElementById("content");
  try {
    const res = await fetch(`views/${viewName}.html`);
    const html = await res.text();
    contentDiv.innerHTML = html;
  } catch (err) {
    contentDiv.innerHTML = `<p>Error cargando la vista "${viewName}"</p>`;
  }
}

// Carga la vista inicial por defecto
window.onload = () => loadView("home");
