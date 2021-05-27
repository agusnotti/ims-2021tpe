
let html =document.querySelector("header")
let response = await fetch('../Pages/header.html');
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
} else {
  let mytext = await response.text();

  html.innerHTML = mytext
}
