// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics');

const tabsApp = document.querySelector('.topics')

topics = ["javascript","bootstrap","technology","jquery","node.js"]

function Tabs (array) {

    array.forEach(e => {
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = e;
        tabsApp.appendChild(tab);
    });
    // const tab = document.createElement('div');

    // tab.classList.add('.tabs');

    // topics.forEach(e =>{
    //     const tab = document.createElement('div');
    //     tab.classList.add('.tabs');
    //     tab.textContent = e;
    //     return tab;
    // })

    // return tab;
}

Tabs(topics);

// followersArray.forEach(e => {
//     axios.get('https://api.github.com/users/'+ e)
  
//     .then (data => {
//       const card = userCard(data.data)
//       const cards = document.querySelector('.cards')
//       cards.appendChild(card)
//     })
  
//     try {
  
//     } catch (error) {
//       document.querySelector('.cards').textContent = 'error somewhere idk where'
//     }
//   })

  //the array 
  topics = ["javascript","bootstrap","technology","jquery","node.js"]