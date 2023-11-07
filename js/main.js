


let numCella = 100
console.log("daje")

let grid = document.getElementById("grid")
let cella = "";


for (let i = 1; i <= numCella; i++) {
    const cella =  document.createElement("div")
     cella.classList.add("easy-cell")
     grid.appendChild(cella)
    
}