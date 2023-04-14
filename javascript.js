const container = document.querySelector('.container');
createGrid();

//Destect hover
const gridBlocks = Array.from(document.querySelectorAll('.container > div'))
gridBlocks.forEach( (gridBlocks) => { gridBlocks.addEventListener('mouseover', (e) => changeColour(e.target)); })




//creates grid
function createGrid()
{
    for (let i=0; i<16; i++)
    {
        const GridRow = document.createElement('div')
        GridRow.style.display = "flex"
        /*GridRow.style.justify-content = "center"*/
        for (let j=0; j<16; j++)
        {
            const newGridBlock = document.createElement('div');
            newGridBlock.style.height = "40px";
            newGridBlock.style.width = "40px";
            newGridBlock.style.border = "1px solid black";
            newGridBlock.style.background = "white"
            GridRow.appendChild(newGridBlock);
        }
        container.appendChild(GridRow)
    }
    return 0;
}

//Changes colour: black <-> white
function changeColour(gBlock)
{
    if (gBlock.style.background === 'white')
        gBlock.style.background = 'black'
    else
        gBlock.style.background = 'white'
}