const btCarregar = document.getElementById("btCarregar");
const preDados = document.getElementById("preDados");

const handleBtCarregarClick = async () => {
  const response = await fetch("https://random.dog/woof.json");
  const data = await response.json();
  console.log('data', data);
  preDados.innerHTML = JSON.stringify(data);
};

btCarregar.onclick = handleBtCarregarClick;
