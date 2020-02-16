let buttons = document.querySelectorAll('button') // array of buttons

for (let i = 0; i < buttons.length; i++) {
    let currButton = buttons[i]

    // below, first arg is name of event. second arg is name of function we want to invoke on that click event
    // currButton.addEventListener('click', handleClick)

    let audio = new Audio('sounds/kick-bass.mp3')
    // writing anonymous function below as second argument
    currButton.addEventListener('click', function() {
        audio.play()
    })
}

/*
function handleClick() {
    alert('I got clicked!')
}
*/

///////

/* document.querySelector('button').addEventListener('click', handleClick)

let numberOfButtons = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOfButtons.length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        alert('I got clicked!')
    })
}
*/