// Creare slide dinamicamente
const imagesArray = ["img/download.jpg", "img/download-1.jpg", "img/download-2.jpg"];

const itemsContainer = document.querySelector(".slider-items")
console.log(itemsContainer)

for (let i=0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i];

    const sliderItem = `
    <div class="item">
        <img src=${currentImage} alt="photo ${i}">
    </div>`;

    itemsContainer.innerHTML += sliderItem;
}

// stato di partenza
const itemsArray = document.getElementsByClassName("item");
console.log(itemsArray);
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Imposto variabile d'appoggio uguale a 0 e dico a js di aggiungere classe active all'elemento dell'array con classe = a variabile d'appoggio
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");
prevBtn.classList.add("hidden")

// Gestisco il click sul bottone next

nextBtn.addEventListener("click", function() {
    prevBtn.classList.remove("hidden");
    // rimuovere activeIndex dalla slide corrente
    itemsArray[activeItemIndex].classList.remove("active");
    // incremento activeIndex
    activeItemIndex++;
    // aggiungo active a quello nuovo
    itemsArray[activeItemIndex].classList.add("active");
    // faccio scomparire il nextBtn all'ultima slide
    if (activeItemIndex === itemsArray.length - 1) {
        nextBtn.classList.add("hidden");
    }
})

// Gestisco il click sul bottone prev
nextBtn.addEventListener("click", function() {
    nextBtn.classList.remove("hidden");

    if (activeItemIndex === 0) {
        prevBtn.classList.add("hidden");
    }
    // rimuovere activeIndex dalla slide corrente
    itemsArray[activeItemIndex].classList.remove("active");
    // incremento activeIndex
    activeItemIndex--;
    // aggiungo active a quello nuovo
    itemsArray[activeItemIndex].classList.add("active");
})