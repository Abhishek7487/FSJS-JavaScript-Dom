//1. (Dev.to) Target the Top description div and change the DEV Community to <Your_Name> and description to your passion
document.querySelector(
  ".side-bar .crayons-card .crayons-subtitle-2"
).innerHTML = "Abhishek Patil 👨‍💻";
document.querySelector(".side-bar .crayons-card .color-base-70").innerHTML =
  "I like to write code and create good looking websites.";

// 2. (Apple) Fetch all the product name and store in an array
let allProducts = document.querySelectorAll(".as-imagegrid-item-title");
let productList = [];
for (let product of allProducts) {
  productList.push(product.textContent.split(" ").splice(0, 1).join());
}

console.log(productList); // ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

//3. (Youtube Support)  Add another FAQ 'My New FAQ' to the list
let original = document.getElementsByClassName("parent")[0];
let cloned = original.cloneNode(true);
cloned.getElementsByTagName("h3")[0].innerText = "My New FAQ";
let parent = document.getElementsByClassName("accordion-homepage")[0];
parent.appendChild(cloned);
cloned.removeChild(cloned.children[1]);
cloned.style.paddingBottom = 0;
let clonedHeading = cloned.children[0];
clonedHeading.style.marginBottom = 0;

//4. (OnePlus) Change the contact number
document.querySelector(".customer-support .service-number").innerText =
  "+91 6366256689";

//5.(Samsung) Target the main div of card and change the Button text to Check out
document.querySelector(
  ".feature-column-carousel__button > .cta.cta--contained.cta--black"
).textContent = "Checkout";

//6. (Adidas) Target the search box and on hover change thebackground color to red.
document.querySelector(
  ".searchinput-wrapper___3YrvF form .searchinput___19uW0"
).style.backgroundColor = "red";

//7. (MDN) Search using dom
function search(title) {
  let searchfield = document.getElementById("top-nav-search-input");
  searchfield.value = title;
  const mainForm = document.getElementById("top-nav-search-form");
  mainForm.submit();
}

let title = "CSS SELECTORS";

search(title);

//8. (google)  Remove alternate languages from the home page languages listed
let languagesList = document.querySelector("#SIvCob .z4hgWe").children;

for (let i = 0; i < languagesList.length; i++) {
  languagesList[i].remove();
}

// 9. (Codewars) Change the font family of the text to monospace and text color to the logo’s background color.
let heading = document.querySelector(".display-heading-1");
heading.style.color = "#AA341D";
heading.style.fontFamily = "monospace";

//10. (Freecodecamp) Target the button and change background colour on mouseover
let btn = document.querySelector(".btn-cta-big");
btn.addEventListener("mouseover", () => {
  document.querySelector(".btn-cta-big .login-btn-text").style.backgroundColor =
    "red";
});
btn.addEventListener("mouseout", () => {
  document.querySelector(".btn-cta-big .login-btn-text").style.backgroundColor =
    "transparent";
});

// 11. (realme) change the realme logo to ineuron logo
var parent = document.querySelector(".logo");
var logo = document.querySelector(".logo .icon-logo");
logo.classList.remove("icon", "icon-logo", "in");
var imageLogo = document.createElement("img");
imageLogo.src =
  "https://learn.ineuron.ai/_next/image?url=%2Fimages%2Fineuron-logo.png&w=750&q=75";
parent.append(imageLogo);
imageLogo.style.height = "30px";

// 12. (github) change the background colour of the button to blue.
let btn = document.querySelector(".btn-primary");
btn.style.backgroundColor = "blue";

// 13. (heacker rank) Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.
document.querySelector(".fl-heading-text").innerHTML = "JSBOOTCAMP";

// 14. (asus) change the fontsize of “Hot Deals” to 80px
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";

//15. (dell) Convert the text “G15 Gaming Laptop” from left to right
document.querySelector(".ps-title").style.textAlign = "right";

// 16. (vercel) change the heading “Start with the developer” to “Start with Scratch”
document.querySelector(".section-title_title__VEDfK").innerHTML =
  "Start with Scratch";

// 17. (sony) change the button text To current Date.
document.querySelector(".btn-container").innerHTML = new Date();

// 18. (philips) change the background colour blue to orange
document.querySelector(".p-f03-footer-container").style.background = "orange";

// 19. (canon) extract the canon logo
let parent = document.querySelector(".navbar-brand");
let image = document.querySelector(".navbar-brand .logo");
function getImgSrc(image) {
  return image.src;
}
let imageSrc = getImgSrc(image);
parent.innerHTML = imageSrc;

// 20. (oppo)  Change the description colour black to orange
document.querySelector(".desc").style.color = "orange";
