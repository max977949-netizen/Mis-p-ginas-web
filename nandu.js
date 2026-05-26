
const botonYoutube = document.getElementById("button");
const botonYoutube2 = document.getElementById("button2");
const maxInput = document.getElementById("myInput");
const myText = document.getElementById("elTexto");

// 2. Le ponemos la acción al hacer click
botonYoutube.addEventListener("click", function() {
    // El segundo parámetro '_blank' es lo que abre una nueva pestaña
    window.open("https://youtu.be/KpVGd_563KY?si=58WbBOHPiZU7I-Y_", "_blank");
});
botonYoutube2.addEventListener("click", function() {
   window.open("https://youtu.be/VTioEDqsx0U?si=zM88PtpZdWYriivn", "_blank")
});
maxInput.addEventListener("input", function() {
    let loQueEscribi = maxInput.value;
    myText.innerText = "escribiste: " +  loQueEscribi;
});

