const formulario = document.getElementById("formulario");
const campo = document.getElementById("nota");
const categoria = document.getElementById("categoria");
const boton = document.getElementById("agregar");
const mensaje = document.getElementById("mensaje");
const lista = document.getElementById("lista");

const CATEGORIAS = ["Estudio", "Trabajo", "Personal"];
let notas = [];
let contador = 0;
let ultimaEliminada = null;

function mostrarMensaje(texto, tipo, textoAccion, accion) {
  mensaje.className = "mensaje " + tipo;
  mensaje.textContent = texto;
  if (textoAccion) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "boton-secundario";
    b.textContent = textoAccion;
    b.addEventListener("click", accion);
    mensaje.appendChild(b);
  }
}

function dibujar() {
  lista.innerHTML = "";
  if (notas.length === 0) {
    lista.innerHTML =
      '<p class="vacio">Aún no tienes notas. Escribe la primera arriba.</p>';
    return;
  }
  CATEGORIAS.forEach(function (cat) {
    const deCat = notas.filter(function (n) {
      return n.categoria === cat;
    });
    if (deCat.length === 0) return;
    const h2 = document.createElement("h2");
    h2.textContent = cat + " (" + deCat.length + ")";
    const ul = document.createElement("ul");
    deCat.forEach(function (n) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = n.texto;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "boton-peligro";
      b.textContent = "Eliminar";
      b.setAttribute("aria-label", "Eliminar nota: " + n.texto);
      b.addEventListener("click", function () {
        eliminar(n.id);
      });
      li.append(span, b);
      ul.appendChild(li);
    });
    lista.append(h2, ul);
  });
}

// Prevención de errores: el botón solo se activa si hay texto
campo.addEventListener("input", function () {
  boton.disabled = campo.value.trim() === "";
});

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const texto = campo.value.trim();
  if (texto === "") return;
  notas.push({ id: ++contador, texto: texto, categoria: categoria.value });
  campo.value = "";
  boton.disabled = true;
  campo.focus();
  dibujar();
  mostrarMensaje("Nota agregada.", "exito");
});

function eliminar(id) {
  const i = notas.findIndex(function (n) {
    return n.id === id;
  });
  ultimaEliminada = { nota: notas[i], indice: i };
  notas.splice(i, 1);
  dibujar();
  mostrarMensaje("Nota eliminada.", "info", "Deshacer", deshacer);
}

function deshacer() {
  if (!ultimaEliminada) return;
  notas.splice(ultimaEliminada.indice, 0, ultimaEliminada.nota);
  ultimaEliminada = null;
  dibujar();
  mostrarMensaje("Nota restaurada.", "exito");
}

dibujar();
