let html = document.querySelector("footer");

let response = await fetch('../Pages/footer.html');
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
} else {
  let mytext = await response.text();

  html.innerHTML = mytext
}
