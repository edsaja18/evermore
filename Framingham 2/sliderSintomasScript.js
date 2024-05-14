document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const totalImages = document.querySelectorAll('.gallery-item').length;
    let currentIndex = 0;
 
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        galleryContainer.style.transition = "transform 0.5s ease-in-out"; // Agrega transición suave
        galleryContainer.style.transform = `translateX(${offset}%)`;
    }
 
    function resetSlide() {
        if (currentIndex === totalImages - 1) {
            setTimeout(() => {
                galleryContainer.style.transition = "none"; // Desactiva la transición para el reset
                currentIndex = 0;
                const offset = -currentIndex * 100;
                galleryContainer.style.transform = `translateX(${offset}%)`;
                setTimeout(() => {
                    galleryContainer.style.transition = "transform 0.5s ease-in-out"; // Vuelve a activar la transición
                }, 0);
            }, 500); // Ajusta el tiempo para dar un pequeño espacio entre las transiciones
        }
    }
 
    setInterval(autoSlide, 5000); // Ajusta el intervalo de cambio automático de imagen (en milisegundos)
    galleryContainer.addEventListener('transitionend', resetSlide); // Restablece la posición después de la transición
 });

 //Slider Sintomas
 let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper .left > div").length - 1;

slider.querySelector(".controls .up").addEventListener("click", function () {
    if (currentSlide == 0) {
        return;
    }
    currentSlide--;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100
        }vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide) * -100
        }vh`;
});

slider.querySelector(".controls .down").addEventListener("click", function () {
    if (currentSlide == totalSlides) {
        return;
    }
    currentSlide++;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100
        }vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide) * -100
        }vh`;
});

 
 