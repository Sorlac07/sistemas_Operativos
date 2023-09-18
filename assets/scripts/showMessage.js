export function ShowMessage(message, type = "success"){
  Toastify({
    text: message,
    duration: 4000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === "success" ? "#4caf50" : "#f44336",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
