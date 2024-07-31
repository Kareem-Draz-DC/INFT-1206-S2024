// console.log('running...')


// DOM is the Document Object Model
// const HTML = {
//     title: '<title>DOM and Forms</title>',
//     body: '<body> .. .. ',
// }


// console.dir(document)

// the 'style' property exists on every node element and can be used to dynamically modify that elements' CSS styling
// document.body.style.backgroundColor = 'red'

// querySelector uses the CSS syntax for selecting elements from the HTML
// let h1 = document.querySelector('h1')
// let h1 = document.querySelector('.DOM-title')
// let h1 = document.querySelector('#dom')
// h1.style.color = 'white'
// h1.style.fontSize = '100px'
// let titleContent = h1.innerText

// console.dir(h1)
// console.log(titleContent)





// const popupBtn = document.querySelector('.popup-btn')

// popupBtn.style.width = '200px'
// popupBtn.style.height = '200px'
// popupBtn.style.fontSize = '70px'

// popupBtn.addEventListener('click', (event) => {
    // The job of the callback funtion is to execute code when the event is triggered
//     alert("Button was clicked")
// })

const newsForm = document.querySelector('.news-form')
console.dir(newsForm)
let subscriberList = [
    {
        name: 'example-name',
        email: 'example-email'
    }
]

newsForm[2].addEventListener('click', (event) => {
    event.preventDefault() // will prevent the from from the default action of refreshing the page
    // alert("form was submitted!")
    const newSub = {
        name: '',
        email: ''
    }
    // debugger
    //Fetch the text in the name input 
    const nameInput = document.querySelector('input[name="name-input"]').value
    
    //Fetch the text in the email input 
    const emailInput = document.querySelector('input[name="email-input"]').value
    // We want to validate the user input

    if (nameInput.length == 0 || emailInput.length == 0) {
        alert('Please enter your name and email to subscribe')
    }
    if (!emailInput.includes('@')) {
        alert("Please enter a valid email to subscribe")
    }
    newSub.name = nameInput
    newSub.email = emailInput
    subscriberList.push(newSub)
    displaySubscriberList()
})

function displaySubscriberList(){
    // Task: Display list of subscribers on page
    // Fetch the <ul> element
    const subscriberListUL = document.querySelector('.subscriber-list')
    // We want to loop through 
    subscriberList.forEach((sub, index) => {
        // Create a new <li>
        const newSub = document.createElement('LI')
        // Set inner text of <li> to the subscriber name and email
        newSub.innerText = `${sub.name} has subscribed with the email: ${sub.email}`;
        subscriberListUL.appendChild(newSub)
    })
}