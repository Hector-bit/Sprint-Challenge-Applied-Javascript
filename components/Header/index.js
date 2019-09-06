// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerApp = document.querySelector('.header-container');

function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const lambdaTimes = document.createElement('h1');
    const temp = document.createElement('span');

    //structure of the header
    header.appendChild(date);
    header.appendChild(lambdaTimes);
    header.appendChild(temp);

    //styling 
    header.classList.add('header');
    date.classList.add('date');
    lambdaTimes.classList.add('.h1');
    temp.classList.add('temp');

    //information that is being entered
    date.textContent = 'SMARCH 28, 2019';
    lambdaTimes.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return header;
}

headerApp.appendChild(Header());
