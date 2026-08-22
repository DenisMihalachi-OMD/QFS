// Referinte catre cele 2 "pagini" (sectiuni) din index.html
const paginaPrincipala = document.getElementById("pagina-principala");
const paginaNoutati = document.getElementById("pagina-noutati");

// Referinte catre butoanele de navigare
const btnNoutati = document.getElementById("btn-noutati");
const btnInapoi = document.getElementById("btn-inapoi");

// Functie care arata o pagina si o ascunde pe cealalta
function aratapagina(pageToShow, pageToHide) {
  pageToHide.style.display = "none";
  pageToShow.style.display = "block";
  window.scrollTo(0, 0); // urca in varful paginii la schimbare
}

// Click pe iconul "Noutati" din navbar
btnNoutati.addEventListener("click", function (e) {
  e.preventDefault(); // opreste comportamentul default al link-ului <a>
  aratapagina(paginaNoutati, paginaPrincipala);
});

// Click pe "Inapoi la pagina principala"
btnInapoi.addEventListener("click", function (e) {
  e.preventDefault();
  aratapagina(paginaPrincipala, paginaNoutati);
});