const container = document.getElementById("container")

function makeGrid() {
	// remove previous grid items from the thing
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
// Make the divs for the grid

	x = parseInt(prompt("What size do you want your grid to be?"))
	container.style.gridTemplateColumns = "repeat("+ x +", 20px)"
	container.style.gridTemplateRows = "repeat("+ x +", 20px)"
	for (let i = 0; i < (x * x); i++) {
		const gridDiv = document.createElement("div");
		container.style.gridTemplateColumns = "repeat("+ x +", 20px)"
		container.style.gridTemplateRows = "repeat("+ x +", 20px)"
		gridDiv.classList.add("grid");
		gridDiv.setAttribute("style",
			"width: 20px; height: 20px; border: red 2px solid;")

		gridDiv.addEventListener("mouseenter", function (element) {
			gridDiv.style.backgroundColor = "green";
		} )
		gridDiv.addEventListener("mouseout", function (element) {
			gridDiv.style.backgroundColor = "";
			console.log(i)
		})
		container.appendChild(gridDiv);
	}

}

const gridButton  = document.getElementById("gridButton");
gridButton.addEventListener("click", makeGrid())