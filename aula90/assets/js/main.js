// const request = (obj) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener("load", () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.response);
//       } else {
//         reject(xhr.response);
//       }
//     });
//   });
// };

document.addEventListener("click", (e) => {
  const target = e.target;
  const tagName = target.tagName.toLowerCase();
  if (tagName === "a") {
    e.preventDefault();
    carregaPagina(target);
  }
});

async function carregaPagina(target) {
  const url = target.getAttribute("href");

  const response = await fetch(url);

  if (response.status !== 200) throw new Error(response.statusText);

  const html = await response.text();
  carregaResultado(html);
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
