let teclaF = false;
let teclaJ = false;

document.addEventListener("keydown", function(evento) {
  const elementoActivo = document.activeElement;
  const escribiendo = elementoActivo.tagName === "INPUT" ||
    elementoActivo.tagName === "TEXTAREA" ||
    elementoActivo.tagName === "SELECT";

  if (escribiendo) {
    teclaF = false;
    teclaJ = false;
    return;
  }

  if (evento.code === "KeyF") teclaF = true;
  if (evento.code === "KeyJ") teclaJ = true;

  if (teclaF && teclaJ && !evento.ctrlKey && !evento.altKey && !evento.metaKey) {
    window.location.hash = "contacto";
  }
});

document.addEventListener("keyup", function(evento) {
  if (evento.code === "KeyF") teclaF = false;
  if (evento.code === "KeyJ") teclaJ = false;
});
