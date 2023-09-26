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
