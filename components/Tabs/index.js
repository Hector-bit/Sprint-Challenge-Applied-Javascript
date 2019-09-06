// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')

    .then(e => {
        let top = e.data.topics;
        top.forEach(element => {
            tabsApp.appendChild(Tabs(element));
        });
    })

const tabsApp = document.querySelector('.topics')

function Tabs (topicTitle) {
    //created elements
    const tab = document.createElement('div');
    const allTab = document.createElement('div');

    //style 
    tab.classList.add('tab');
    allTab.classList.add('tab');

    //content 
    tab.textContent = topicTitle;
    allTab.textContent = 'All';

    return tab;
}
