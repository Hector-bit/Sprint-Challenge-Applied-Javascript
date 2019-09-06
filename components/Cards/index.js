// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//axios.get('https://lambda-times-backend.herokuapp.com/articles');

const cardsContainer = document.querySelector('.cards-container');

function Cards(object){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    //structure 
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(authorName);

    //styling
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //context
    headline.textContent = object.headline;
    image.src = object.authorPhoto;
    authorName.textContent = object.authorName;

    //image.src = object.;
    console.log(object.headline);

    return card;
}

// Cards(axios.get('https://lambda-times-backend.herokuapp.com/articles'));

// console.log(axios.get('https://lambda-times-backend.herokuapp.com/articles'));

// articles.forEach(e => {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
  


    .then (res => {
        //console.log(res);
        let catagories = Object.keys(res.data.articles);
        catagories.forEach(catagory => {
            //console.log(catagory);
            res.data.articles[catagory].forEach(article =>{
                console.log(Cards(article));
                cardsContainer.appendChild(Cards(article));
                
            })
        })
    //   const card = Cards(data.data)
    //   const cards = document.querySelector('.cards')
    //   cards.appendChild(card)
    })

    // cardsContainer.appendChild(Cards(axios.get('https://lambda-times-backend.herokuapp.com/articles')));
  
    // console.log(cardsContainer.appendChild(Cards(axios.get('https://lambda-times-backend.herokuapp.com/articles'))));
    // try {
  
    // } catch (error) {
    //   document.querySelector('.cards').textContent = 'error somewhere idk where'
    // }

