const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//fléches du slide//

current = 0;

const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", function () {
    if (current === 0) {
        current = slides.length;
    } else {
        current--
    };
    console.log("a_gauche");
	displayDotSlide(current)
});


const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", function () {

    if (current === slides.length - 1) {
        current = 0;
    } else {
      current++;
   }
   console.log("a_droite");
   displayDotSlide(current)
});

//dots//

let dots = document.querySelector('.dots');

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div");
	 dots.appendChild (dot);
	if (i == 0){
		dot.classList = "dot dot_selected"; 
	}
	else{
		dot.classList = "dot";
	}
}

function displayDotSlide(index)
{
	let image = document.querySelector('#banner .banner-img');
    image.src = "./assets/images/slideshow/" + slides[index]["image"];
    let text = document.querySelector('#banner p');
    text.innerHTML = slides[index]["tagLine"];
	let dot_selected = document.querySelector('#banner .dots .dot_selected');
	dot_selected.classList.remove("dot_selected");
	let new_dot_selected = document.querySelector(`#banner .dots .dot:nth-child( ${index+1})`);
	new_dot_selected.classList.add("dot_selected");
}