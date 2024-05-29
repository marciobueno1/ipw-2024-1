const h2Subst = document.getElementById("h2Subst");
const btSubst = document.getElementById("btSubst");

btSubst.onclick = () => {
  h2Subst.innerHTML = "Novo texto";
  h2Subst.className = "destaque";
  btSubst.disabled = true;
};
