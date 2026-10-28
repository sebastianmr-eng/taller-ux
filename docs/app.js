document.getElementById("agregar").addEventListener("click", function () {
  const texto = document.getElementById("nota").value;
  const li = document.createElement("li");
  li.innerHTML = texto + ' <a href="#">BORRAR</a>';
  li.querySelector("a").addEventListener("click", function () {
    li.remove();
  });
  document.getElementById("lista").appendChild(li);
  document.getElementById("nota").value = "";
});
