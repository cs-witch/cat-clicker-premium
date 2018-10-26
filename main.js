// use query selector for each cat.
document.querySelector("#barnaby").addEventListener("click", showBarnaby);
document.querySelector("#rasputin").addEventListener("click", showRasputin);
document.querySelector("#tina").addEventListener("click", showTina);
document.querySelector("#bean").addEventListener("click", showBean);
document.querySelector("#ham").addEventListener("click", showHam);

//select display area
const display= document.querySelector("#display");

// Create elements for display area
const name = document.createElement("h1");
const image = document.createElement("img");
const counter = document.createElement("h3");
const div = document.createElement("div");

//declare counter vaiable
let barnabyClick = 0;
let rasputinClick = 0;
let tinaClick = 0;
let beanClick = 0;
let hamClick = 0;

//add id to image
image.setAttribute("id", "image")

//add event listener to the img
image.addEventListener("click", increment);

// $(imgAnimate).addClass("animated rubberBand");

function increment() {
    switch (name.textContent) {
        case "Barnaby":
            barnabyClick++;
            counter.innerHTML = `Clicks: <span>${barnabyClick}</span>`;
            break;
        case "Rasputin":
            rasputinClick++;
            counter.innerHTML = `Clicks: <span>${rasputinClick}</span>`;
            break;
        case "Tina":
            tinaClick++;
            counter.innerHTML = `Clicks: <span>${tinaClick}</span>`;
            break;
        case "Bean":
            beanClick++;
            counter.innerHTML = `Clicks: <span>${beanClick}</span>`;
            break;
        case "Ham":
            hamClick++;
            counter.innerHTML = `Clicks: <span>${hamClick}</span>`;
            break;
    }
}

function showBarnaby() {
    name.textContent = "Barnaby";
    image.setAttribute("src", "bengal.jpg");
    counter.innerHTML = `Clicks: <span>${barnabyClick}</span>`;

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
    addAnimation();
}

function showRasputin() {
    name.textContent = "Rasputin";
    image.setAttribute("src", "burmese.jpg");
    counter.innerHTML = `Clicks: <span>${rasputinClick}</span>`;

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
    // addAnimation();
}
function showTina() {
    name.textContent = "Tina";
    image.setAttribute("src", "ragdoll.jpg");
    counter.innerHTML = `Clicks: <span>${tinaClick}</span>`;

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
    // addAnimation();
}
function showBean() {
    name.textContent = "Bean";
    image.setAttribute("src", "siamese.jpg");
    counter.innerHTML = `Clicks: <span>${beanClick}</span>`;

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
    // addAnimation();
}
function showHam() {
    name.textContent = "Ham";
    image.setAttribute("src", "spyhnx.jpeg");
    counter.innerHTML = `Clicks: <span>${hamClick}</span>`;

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
    // addAnimation();
}

function addAnimation(){
	const $image = $("#image");
	$image.click(function() {
		$image.animate({
    opacity: 0.7,
    left: "+=50",
    height: "toggle"
  }, 500, function() {
    $image.css("opacity", 1);
    $image.toggle("slow");
    });
  });
};

// $(selector).hide(speed,callback);
