


document.addEventListener("DOMContentLoaded", () => {
  const oLien = document.querySelector("nav.gotoTop a");
  if (oLien) {
    // Rendre le lien visible en fonction du scroll
    window.addEventListener("scroll", () => {
      const minScroll = window.innerHeight;
      const action = (window.pageYOffset > minScroll) ? "add" : "remove";
      oLien.classList[action]("visible");
    });

    // Animation retour au top
    oLien.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
