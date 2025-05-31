document.addEventListener("DOMContentLoaded", () => {

    const gridContainer = document.querySelector(".gridContainer");
    const btnRef = document.querySelector("button");

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
                    newGridCanvas.style.backgroundColor = "red";
                    });
                gridContainer.append(newGridCanvas);

                console.log(canvasSize);

            }
            
        }
        
        
    });


    for( let i = 0; i < 256;  i++){   
        const grid = document.createElement("div");
        grid.classList.add("grid-item");
            grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "red";
            });
        gridContainer.append(grid);
    }
});