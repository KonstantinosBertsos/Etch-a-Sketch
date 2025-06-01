document.addEventListener("DOMContentLoaded", () => {

    const gridContainer = document.querySelector(".gridContainer");
    const btnRef = document.querySelector("button");
    const black = document.querySelector(".colorBlack");
    const red = document.querySelector(".colorRed");
    const blue = document.querySelector(".colorBlue");
    const green = document.querySelector(".colorGreen");
    const yellow = document.querySelector(".colorYellow"); 
    const eraser = document.querySelector(".eraser");
    const rgb = document.querySelector(".rgb");

    let colorPicked;

    btnRef.addEventListener("click", () => {
        let canvasSize = prompt ("Choose how many squares per side you want your Grind to have");
        if(canvasSize >= 100){
            alert("Cant Handle anything bigger then 100, try again with a smaller Number");
            
        }else {
            
            while (gridContainer.firstChild){
                gridContainer.removeChild(gridContainer.firstChild);
            }

            for(let i = 0; i < canvasSize * canvasSize; i++){
                
                let divDimension = 880 / canvasSize;
                const newGridCanvas = document.createElement("div");
                //newGridCanvas.classList.add("grid-item");
                newGridCanvas.style.height =  `${divDimension}px`;
                newGridCanvas.style.width =   `${divDimension}px`;
                    newGridCanvas.addEventListener("mouseover", () => {

                        if (colorPicked === "random" ) {
                            newGridCanvas.style.backgroundColor = randomRGB();
                        } else {
                            newGridCanvas.style.backgroundColor = colorPicked;
                        }
                    
                       });
                gridContainer.append(newGridCanvas);

                console.log(canvasSize);

            }
            
        }
        
        
    });

    function randomRGB (){
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        return  `rgb(${red}, ${green}, ${blue})`;
    };

    black.addEventListener("click", () => {
        colorPicked = "black";
    });

    red.addEventListener("click", () => {
        colorPicked = "red";
    });

    blue.addEventListener("click", () => {
        colorPicked = "blue";
    });
    green.addEventListener("click", () => {
        colorPicked = "rgba(84, 167, 6, 0.856)";
    });
    green.addEventListener("click", () => {
        colorPicked = "rgba(84, 167, 6, 0.856)";
    });
    yellow.addEventListener("click", () => {
        colorPicked = "rgb(241, 245, 5)";
    });
    eraser.addEventListener("click", ()=> {
        colorPicked = "white";
    });
    rgb.addEventListener("click", ()=> {
        colorPicked = "random";
    });
    


    
    
    for( let i = 0; i < 256;  i++){   
        const grid = document.createElement("div");
        grid.classList.add("grid-item");
            grid.addEventListener("mouseover", () => {
                if (colorPicked === "random" ) {
                    
                    grid.style.backgroundColor = randomRGB();
                } else {
                    grid.style.backgroundColor = colorPicked;
                }
            
               });
            /*red.addEventListener("click", () => {
                grid.addEventListener("mouseover", () => {
                    grid.style.backgroundColor = "red";
                    });
            }); */    
        gridContainer.append(grid);
    }
});