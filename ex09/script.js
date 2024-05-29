const h2Subst = document.getElementById("h2Subst");
const btSubst = document.getElementById("btSubst");

btSubst.onclick = () => {
  const numSorteado = Math.floor(Math.random() * 100) + 1;
  h2Subst.innerHTML = "Número sorteado: " + numSorteado;
  h2Subst.className = "destaque";
};
