// Challenge 1: Your Age in Days
function ageindays() {
    if (document.getElementById('ageindays') == null) {
        var birthyear = prompt('What year were you born?');
        var ageindays = (2020 - birthyear) * 365
        var h1 = document.createElement('h1');
        var textAnswer = document.createTextNode('You are ' + ageindays + ' days old.')
        h1.setAttribute('id','ageindays');
        h1.appendChild(textAnswer);
        document.getElementById('flex-box-result').appendChild(h1);
    } else {
        reset();
        var birthyear = prompt('What year were you born?');
        var ageindays = (2020 - birthyear) * 365
        var h1 = document.createElement('h1');
        var textAnswer = document.createTextNode('You are ' + ageindays + ' days old.')
        h1.setAttribute('id','ageindays');
        h1.appendChild(textAnswer);
        document.getElementById('flex-box-result').appendChild(h1);
    }
}


function reset() {
    document.getElementById('ageindays').remove();
}

// Challenge 2: Cat Generator

function generate_cat() {
    var img = document.createElement('img');
    img.setAttribute('src','https://thecatapi.com/api/images/get?format=src&type=gif&size=small')
    document.getElementsByClassName("flex-box-container-2")[0].appendChild(img);
}

// Challenge 3: Rock, Paper, Scissors
function rpsGame(choice) {
    var humanChoice, botChoice;
    humanChoice = choice.id;
    botChoice = numberToChoice(randToRpsInt())
    
    
    results = decideWinner(humanChoice, botChoice); 
   
    message = finalMessage(results);
    rpsFrontEnd(humanChoice, botChoice, message);
}


function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}


function numberToChoice(number) {
    return ['rock','paper','scissors'][number];
}

function decideWinner(humanChoice, botChoice) {
    var rpsDataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors' : {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsDataBase[humanChoice][botChoice];
    var BotScore = rpsDataBase[botChoice][humanChoice];

    return [yourScore,BotScore]; 
}
 
 
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // remove all the contents 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    imagesDatabase[humanImageChoice]

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');


    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] +"</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    

}


// Challege 4: Change the color of all Buttons
var all_buttons = document.getElementsByTagName('button');

// to remeber the first color of all buttons 
var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons)

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value == 'red') {
        buttonsRed();
    } else if (buttonThingy.value == 'green') {
        buttonsGreen();
    } else if (buttonThingy.value == 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value == 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger')
    }
}

function buttonsGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonColorReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i])
    }
}

function randomColors() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[pickRandomColor()]);
    }

}


function pickRandomColor() {
    return Math.floor(Math.random() * 4);
}