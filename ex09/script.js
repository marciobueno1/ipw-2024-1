const h2Subst = document.getElementById("h2Subst");
const btSubst = document.getElementById("btSubst");
const inputMin = document.getElementById("inputMin");
const inputMax = document.getElementById("inputMax");

const handleBtSubstClick = (evt) => {
  console.log("evt.target", evt.target);

  const min = Number(inputMin.value);
  const max = Number(inputMax.value);

  if (min === 0) {
    alert("Favor digitar o valor mínimo!");
    return;
  }

  if (max === 0) {
    alert("Favor digitar o valor máximo!");
    return;
  }

  if (max < min) {
    alert("O valor máximo precisa ser maior ou igual ao mínimo!");
    return;
  }

  const numSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  h2Subst.innerHTML = "Número sorteado: " + numSorteado;
  h2Subst.className = "destaque";
};

btSubst.onclick = handleBtSubstClick;
