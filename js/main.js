let mode = document.getElementById("label");
let start = document.getElementById("start")

let modevalore = mode.value;


let grid = document.getElementById("grid")
let cella = "";
let numCella = "";
start.addEventListener("click", function(){

    if (modevalore == "easy"){
        numCella = 100
    }   else if (modevalore == "medium"){
                    numCella = 81
        }   else if (modevalore == "hard"){
            numCella = 49
        }
               
        for (let i = 1; i <= numCella; i++) {
    
            const cella =  document.createElement("div")
            cella.classList.add("easy-cell")
            grid.appendChild(cella)
            cella.innerHTML = ([i])        
        
            cella.addEventListener("click", function(){
                this.classList.toggle("clicked")
                
                
    
    
            })
        }
        

})

    
 
        