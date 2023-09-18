/* This is the  */
const hotelsList = document.querySelector("#hotels-list");

/* The API of the hotels will be consumed here   */
const fetchhotels = async () => {
  const url = `https://64a842f7dca581464b858f39.mockapi.io/hoteles`;
  const response = await fetch(url);
  const data = await response.json();
  const dataResults = data.map((hotel) => {
    const name = hotel.title;
    const imageUrl = hotel.images[0];
    const price = hotel.price;
    return {
      name,
      imageUrl,
      price,
    };
  });
  return dataResults;
};

const documentReady = async () => {
  const hotels = await fetchhotels();
  renderhotels(hotels);
};

document.addEventListener("DOMContentLoaded", documentReady);

/* This function prints on the label with id hotelList the cards of each hotel.   */
const renderhotels = (hotels) => {
  let elements = "";

  hotels.forEach((hotel) => {
    elements += `
    <div class='bg-[#fff] pt-6 pb-4 shadow-2xl rounded-xl text-center'>
      <img class='mx-auto w-[350px] h-[200px] object-contain' src="${hotel.imageUrl}" alt="${hotel.name}" />
      <div class='mt-4 px-6'>
          <div class='flex items-center flex-col text-[26px]'>
              <h2 class="text-[#acc864]">${hotel.name}</h2>
              <p class="text-[#2d6b22]">${hotel.price} Є</p>
          </div>
          <button
            class='bg-[#8ab446] text-white py-4 px-10 mt-4 block mx-auto hover:bg-white hover:text-[#8ab446] rounded-2xl border-[#50F5431AC2D8] border-2 ease-in-out duration-300 border-[#8ab446]'
            onClick={addItemsToCart}>Reservar</button>
      </div>
    </div>
    `;
  });

  hotelsList.innerHTML = elements;
};

