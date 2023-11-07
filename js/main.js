let mode = document.getElementById("label");
let start = document.getElementById("start")




let grid = document.getElementById("grid")
let cella = "";
let numCella = "10";

start.addEventListener("click", function(){
    let modevalore = mode.value;
    console.log(modevalore)
    if (modevalore == "easy"){
        numCella = 100
    }   else if (modevalore == "medium"){
                    numCella = 81
        }   else if (modevalore == "hard"){
            numCella = 49
        }
               
        for (let i = 1; i <= numCella; i++) {
            if (modevalore = "easy"){
                let cella =  document.createElement("div")
                cella.classList.add("easy-cell")
                grid.appendChild(cella)
                cella.innerHTML = ([i])   
            } else if (modevalore = "medium"){
                let cella =  document.createElement("div")
                cella.classList.add("mid-cell")
                grid.appendChild(cella)
                cella.innerHTML = ([i])
            } else if (modevalore == "hard"){
                let cella =  document.createElement("div")
                cella.classList.add("hard-cell")
                grid.appendChild(cella)
                cella.innerHTML = ([i])
            }
                 
        
            cella.addEventListener("click", function(){
                this.classList.toggle("clicked")
                
                
    
    
            })
       
        
        }
})

 
 
        