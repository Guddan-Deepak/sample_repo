const galleryContainer = document.querySelector('.gallery-container');
const galleryControlContainer = document.querySelector('.gallery-controls');
const galleryItems = document.querySelectorAll('.gallery-item');

function createCarousel(container, items, controls) {
    let carouselArray = [...items];

    const updateGallery = () => {
        carouselArray.forEach((el, i) => {
            el.className = `gallery-item gallery-item-${i + 1}`;
        });
    };

    const setCurrentState = (direction) => {
        direction === 'previous' 
            ? carouselArray.unshift(carouselArray.pop()) 
            : carouselArray.push(carouselArray.shift());
        updateGallery();
    };

    const setControls = () => {
        controls.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            button.innerText = control;
            button.addEventListener('click', () => setCurrentState(control));
            galleryControlContainer.appendChild(button);
        });
    };

    setControls();
    updateGallery();
}

createCarousel(galleryContainer, galleryItems, ['previous', 'next']);