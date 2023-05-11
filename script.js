/***** Menu *****/
((d) => {
  const $btnMenu = d.querySelector(".btns-menu"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

window.addEventListener("scroll", function () {
  // Cambio de Header
  let header = document.querySelector("header"),
    logo = document.querySelector(".logo"),
    menu = document.querySelector(".menu");
  header.classList.toggle("abajo", window.scrollY > 0);
  logo.classList.toggle("abajo-logo", window.scrollY > 0);

  for (let i = 0; i < menu.children.length; i++) {
    let hijoActual = menu.children[i];
    hijoActual.classList.toggle("abajo-menu", window.scrollY > 0);
  }
});
