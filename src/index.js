function displayPoem(response) {
    console.log("#poem generated");

new Typewriter("#poem-finder", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
});
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "e0afd0e3efa2a264e399b2e7eboa411t";
   
    let prompt = `Generate an English poem about ${instructionsInput.value}`;
    let context = `You are a renaissance poet and love to write poems about the past. Your mission is to generate a poem from a set time in HTML. Please follow the user instructions`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);



    axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);