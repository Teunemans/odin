const container = document.getElementById("container")

// Make the divs for the grid

for (let i = 0; i < 256; i++) {
	const gridDiv = document.createElement("div");
	gridDiv.classList.add("grid");
	gridDiv.setAttribute("style",
		"width: 20px; height: 20px; border: red 2px solid;")

	gridDiv.setAttribute("style", "grid:hover {background")
	gridDiv.addEventListener("mouseover", function (element) {
		gridDiv.style.backgroundColor = "green";
	} )
	gridDiv.addEventListener("mouseleave", function (element) {
		gridDiv.style.backgroundcolor = "white";
	})
	container.appendChild(gridDiv);
}