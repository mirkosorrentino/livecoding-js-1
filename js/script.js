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

let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");

// Gestisco il click sul bottone next
const nextBtn = document.querySelector(".next");
console.log(nextBtn);
nextBtn.addEventListener("click", function() {
    // rimuovere activeIndex dalla slide corrente
    itemsArray[activeItemIndex].classList.remove("active");
    // incremento activeIndex
    activeItemIndex++;
    // aggiungo active a quello nuovo
    itemsArray[activeItemIndex].classList.add("active");
    // blocco il nextBtn all'ultima slide
})
