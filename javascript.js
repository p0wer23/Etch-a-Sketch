const container = document.querySelector('.container');
createGrid();

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
            newGridBlock.style.height = "20px";
            newGridBlock.style.width = "20px";
            newGridBlock.style.border = "1px solid black";
            GridRow.appendChild(newGridBlock);
        }
        container.appendChild(GridRow)
    }
    return 0;
}