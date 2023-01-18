const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    });
  });
};

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
  console.log(url);

  const objConfig = {
    method: "GET",
    url: url,
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (error) {
    console.log(error);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}

// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if(xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

// document.addEventListener('click', e => {
//   const el = e.target;
//   const tag = el.tagName.toLowerCase();

//   if (tag === 'a') {
//     e.preventDefault();
//     carregaPagina(el);
//   }
// });

// async function carregaPagina(el) {
//   const href = el.getAttribute('href');

//   const objConfig = {
//     method: 'GET',
//     url: href
//   };

//   try {
//     const response = await request(objConfig);
//     carregaResultado(response);
//   } catch(e) {
//     console.log(e);
//   }
// }

// function carregaResultado(response) {
//   const resultado = document.querySelector('.resultado');
//   resultado.innerHTML = response;
// }
