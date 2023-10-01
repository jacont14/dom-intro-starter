// Juan Contreras

// id section
document.getElementById("firstPara").innerHTML += " <span class=\"tan\" >This is new tan tex.</span>";

// Tag Name Section
// get all images, change width to 250px
let images = document.getElementsByTagName("img");
console.log(images);

for(let image of images){
    image.width = "250";
}

// class name section
// set med-blue span to #3C5E73
// set light-blue span to #7C9EA6

let ltBlueSpans = document.getElementsByClassName("light-blue");
let medBlueSpans = document.getElementsByClassName("med-blue");

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6";
}

for(let span of medBlueSpans){
    span.style.color = "#3C5E73";
}

// selecting a group with a css selector
let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"];
let svgs = document.querySelectorAll("#svgs svg");
//console.log(svgs);
// iterate through the svg collections and change the color of each

for(let i = 0; 1 < svgs.length; i++){
svgs[i].style.stroke = colors[i];
}

// individual element with css selector
document.querySelector(".bold").style.color = "#7C9EA6";

// changing dom node content
document.querySelector("content_list li:first-of-type").textContent = "this is the new list item text";

document.querySelectorAll("content_list li")[2].innerHTML += " <strong>Juan Contreras</strong";

//removing attributes
document.querySelector("#remove a").removeAttribute("hidden");