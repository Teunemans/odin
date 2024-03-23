const container = document.getElementById("container")


// hover thing
function hover(element, enter, leave){
	element.addEventListener('mouseenter', enter)
	element.addEventListener('mouseleave', leave)
}

// Make the divs for the grid
for (let i = 0; i < 256; i++) {
	const gridDiv = document.createElement("div");
	gridDiv.classList.add("grid");
	gridDiv.setAttribute("style",
		"width: 20px; height: 20px; border: red 2px solid;")

	gridDiv.addEventListener("mouseenter", function (element) {
		gridDiv.style.backgroundColor = "green";
	} )
	gridDiv.addEventListener("mouseout", function (element) {
		gridDiv.style.backgroundcolor = "white";
		console.log(i)
	})
	container.appendChild(gridDiv);
}