const container = document.getElementById("container")

// Make the grid
for (let i = 0; i <= 256; i++) {
	const div1 = document.createElement("div")
	div1.textContent = i
	container.appendChild(div1)
}