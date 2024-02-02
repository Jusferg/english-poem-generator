function generatePoem(event) {
    event.preventDefault();


new Typewriter("#poem-finder", {
    strings: "roses are red, violets are blue",
    autoStart: true,
    cursor: "",
    delay: 1,
});
}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);