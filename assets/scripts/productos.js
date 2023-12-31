const hotelsList = document.querySelector("#productos-list");

fetch('http://172.191.145.152:3000/obtener-datos')
  .then((response) => {
    if (!response.ok) {
      throw new Error('No se pudo obtener los datos');
    }
    return response.json();
  })
  .then((data) => {
      let elements = "";
      data.forEach((product) => {
        elements += `
        <div class='bg-[#fff] pt-6 pb-4 shadow-2xl rounded-xl text-center'>
          <img class='mx-auto w-[350px] h-[200px] object-contain' src="${product.image}" alt="${product.title}" />
          <div class='mt-4 px-6'>
          <div class='flex items-center flex-col text-[26px]'>
          <h2 class="text-[#acc864]">${product.title}</h2>
          <p class="text-[#2d6b22]"> S/ ${product.price}</p>
          </div>
          <button
          class='bg-[#8ab446] text-white py-4 px-10 mt-4 block mx-auto hover:bg-white hover:text-[#8ab446] rounded-2xl border-[#50F5431AC2D8] border-2 ease-in-out duration-300 border-[#8ab446]'
          onclick="buyProduct('${product.id}', ${product.price})">
          Comprar
      </button>
          </div>
        </div>
        `;
      });
      hotelsList.innerHTML = elements;
    })
  .catch((error) => {
    console.error(error);
  });

/*
 {
   "usuario_id": 1,
   "producto_id": 101,
   "cantidad": 1,
   "total": 50.00
 }
*/
  //http://localhost:3000/agregar-compra


  function buyProduct(productId, productPrice) {
    fetch("http://172.191.145.152:3000/agregar-compra", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario_id: 1,
        producto_id: productId,
        cantidad: 1,
        total: productPrice,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener los datos");
        }
        return response.json();
      }
      )
      .then((data) => {
        console.log(data);
        alert("Compra realizada con éxito");
      }
      )
      .catch((error) => {
        console.error(error);
      }
      );

  }

