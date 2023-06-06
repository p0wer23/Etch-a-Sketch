const container = document.querySelector('.container');
const color_btns = Array.from(document.querySelectorAll('.color > button'));
const change_grids = document.querySelector('.grid_change')
let color_option = 'Black-White'
createGrid(16);
listenGrid()

color_btns.forEach((color_btn)=>{
    color_btn.addEventListener('click', (e) => {
        color_option = e.target.textContent;
        color_btns.forEach((color_btns)=>(color_btns.removeAttribute('class')));
        console.log(e.target.classList.add('select'))
    })
});

change_grids.addEventListener('click', ()=>{
    let dimension = parseInt(prompt('Enter required dimension of grid:'));
    while (!((dimension>=5) && (dimension<=100)))
    {
        dimension = parseInt(prompt('Enter required dimension of grid:\n(please enter numbers between 5 to 100)'));
    }
    createGrid(dimension)
    gridBlocks = Array.from(document.querySelectorAll('.container > div'));
    listenGrid()
})



//creates grid
function createGrid(dimension)
{
    while (container.firstChild)
        container.removeChild(container.firstChild)
    gridSize = 600/dimension;
    for (let i=0; i<dimension; i++)
    {
        const GridRow = document.createElement('div');
        GridRow.style.display = "flex";
        /*GridRow.style.justify-content = "center"*/
        for (let j=0; j<dimension; j++)
        {
            const newGridBlock = document.createElement('div');
            newGridBlock.style.boxSizing = 'border-box';
            newGridBlock.style.height = `${gridSize}px`;
            newGridBlock.style.width = `${gridSize}px`;
            newGridBlock.style.border = '0.5px solid rgb(0,0,0,0.3)';
            newGridBlock.style.background = "white";
            GridRow.appendChild(newGridBlock);
        }
        container.appendChild(GridRow);
    }
    var gridBlocks = Array.from(document.querySelectorAll('.container > div'));
    return 0;
}


function listenGrid()
{
    const gridBlocks = Array.from(document.querySelectorAll('.container > div'));


    gridBlocks.forEach( (gridBlocks) => { 
        gridBlocks.addEventListener('mouseover', (e) => changeColour(e.target)); 
    });
}


function changeColour(gBlock)
{
    switch (color_option)
    {
        case 'Black-White':
            changeColourBW(gBlock);
            break;
        case 'Random Color':
            changeColourRandom(gBlock);
            break;
        case 'Eraser':
            eraseColor(gBlock);
            break;
    }
}

//Changes colour: black <-> white
function changeColourBW(gBlock)
{
    if (gBlock.style.background === 'white')
        gBlock.style.background = 'black'
    else
        gBlock.style.background = 'white'
}

function changeColourRandom(gBlock)
{
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    gBlock.style.background = `rgb(${r},${g},${b})`
}

function eraseColor(gBlock)
{
    gBlock.style.background = 'white'
}