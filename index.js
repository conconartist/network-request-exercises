fetch('http://localhost:3001/api/v1/animals')
  .then(response => response.json())
  .then(animals => showAnimals(animals))

showAnimals = (animals) => {
    const animalsDisplay = document.querySelector("#animals-and-things");
    animals.forEach(animal => {
        const animalName = document.createElement("p");
        animalName.innerText = `We love ${animal.name}! They eat ${animal.diet}. Here's a fun fact about ${animal.name}: ${animal.fun_fact}`;
        animalsDisplay.append(animalName);
    });
}