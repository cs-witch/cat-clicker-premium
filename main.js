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

//create div append div into display area
div.append(image);
div.append(name);
div.append (counter);
display.append(div);
 
// declare counter variable
let counter= 0;
	counter.innerHTML = "Clicks <span>" +clickNum+ "</span>";

// create counters for each cat
let barnabyClick= 0;
let hamClick = 0;
//add event listener to the img
const imgAnimate = image.addEventListener("click", increment);
console.log(imgAnimate);

fucntion increment(){
	//console.log("123");
	switch(name.textContent) {
		case: "Barnaby", 
		barnabyClick++;
		counter.innerHTML = `Clicks: <span>${barnabyClick}</span>`;
		break;
		case: "Rasputin",
		rasputinClick++;
		counterinnerHTML = `Clicks: <span>${rasputinClick}</span>`;
		case: "Tina", 
		barnabyClick++;
		counter.innerHTML = `Clicks: <span>${barnabyClick}</span>`;
		break;		
		case: "Bean", 
		barnabyClick++;
		counter.innerHTML = `Clicks: <span>${barnabyClick}</span>`;
		break;		
		case: "Ham", 
		barnabyClick++;
		counter.innerHTML = `Clicks: <span>${barnabyClick}</span>`;
		break;		
	}

}

//display current numbr of cat clicks