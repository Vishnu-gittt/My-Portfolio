console.log("Portfolio Loaded");

const text = "Data Science Student | AI Enthusiast | Web Developer\nI am into Data Science & Web Development";

let index = 0;

function typeEffect(){

    if(index < text.length){

        const char = text.charAt(index);

        if(char === "\n"){
            document.querySelector(".typing").innerHTML += "<br>";
        } else {
            document.querySelector(".typing").innerHTML += char;
        }

        index++;
        setTimeout(typeEffect,50);

    }

}

typeEffect();

ScrollReveal().reveal('.skill-card', {
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    interval: 200,
    scale: 0.85,
    easing: 'ease-in-out',
    reset: false
});

// Initialize EmailJS
(function(){
emailjs.init("o-Xvd-9la---v7N2z");
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_smlr9jo",
"template_n3vrb2s",
this
)
.then(function(response){

console.log("SUCCESS!", response.status, response.text);
alert("Message sent successfully!");

form.reset();

})
.catch(function(error){

console.log("FAILED...", error);
alert("Failed to send message");

});

});