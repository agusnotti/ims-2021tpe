let html = document.querySelector("#carousel")

let response = await fetch('../Pages/carousel.html');
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
} else {
  let mytext = await response.text();

  html.innerHTML = mytext
}
