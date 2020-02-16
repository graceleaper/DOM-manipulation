let buttons = document.querySelectorAll('button') // array of buttons

for (let i = 0; i < buttons.length; i++) {
    let currButton = buttons[i]

    // below, first arg is name of event. second arg is (named or anonymous) function we want to invoke on that click event

    // writing anonymous function below as second argument
    currButton.addEventListener('click', function() {
        //'this' refers to currButton
        let buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    })
}

document.addEventListener('keydown', function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key) {

    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break

        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break

        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break

        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break

        case 'j':
            let snare = new Audio('sounds/snare.mp3')
            snare.play()
            break

        case 'k':
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
            break

        case 'l':
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play()
            break

        default:
            console.log(buttonInnerHTML)
    }
}

function buttonAnimation(currKey) {
    let activeButton = document.querySelector('.' + currKey)
    activeButton.classList.add('pressed')
    setTimeout(function() {
        activeButton.classList.remove('pressed')
    }, 100)
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