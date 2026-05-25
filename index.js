async function fetchPokemon() {
    try {
        const pokemonName = document
            .getElementById("pokemonName")
            .value.toLowerCase();

        if (!pokemonName) {
            throw new Error("Empty field");
        }

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
        );

        if (!response.ok) {
            throw new Error("Not okay");
        }
        // console.log(response);

        const data = await response.json();
        const sprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemoneSprite");
        imgElement.src = sprite;
        imgElement.style.display = "block";
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", fetchPokemon);
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        fetchPokemon();
    }
});
