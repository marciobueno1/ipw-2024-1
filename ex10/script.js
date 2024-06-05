const btCarregar = document.getElementById("btCarregar");
const preDados = document.getElementById("preDados");
const divImg = document.getElementById("divImg");

const handleBtCarregarClick = async () => {
  const response = await fetch("https://random.dog/woof.json");
  const data = await response.json();
  console.log('data', data);
  preDados.innerHTML = JSON.stringify(data);

  divImg.innerHTML = "";
  const img = document.createElement("img");
  img.src = data.url;
  divImg.appendChild(img);
};

btCarregar.onclick = handleBtCarregarClick;
