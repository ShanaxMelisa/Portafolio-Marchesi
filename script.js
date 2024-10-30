document.addEventListener("DOMContentLoaded", () => {
    const typed = new Typed(".text", {
        strings: ["¡Bienvenid@ a mi portafolio!"],  // Personaliza el texto aquí
        typeSpeed: 90,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        cursorChar: '<span class="custom-cursor" style="font-size: 45px; color: #fffff;">|</span>' // Agrega la coma aquí
    });
});
