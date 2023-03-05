//HTML
let stopButton = document.getElementById('stopButton');
let slowButton = document.getElementById('slowButton');
let goButton = document.getElementById('goButton');

let stopLight = document.getElementById('stopLight');
let slowLight = document.getElementById('slowLight');
let goLight = document.getElementById('goLight');

stopButton.addEventListener('click', function() {
  // if (stopLight.classList.contains('stop')) {
  //   stopLight.classList.remove('stop')
  // } else {
  //   stopLight.classList.add('stop')
  // }
  // Or use the toggle method:
  stopLight.classList.toggle('stop');
});

slowButton.addEventListener('click', function() {
  // if (slowLight.classList.contains('slow')) {
  //   slowLight.classList.remove('slow')
  // } else {
  //   slowLight.classList.add('slow')
  // }
  // Or use the toggle method:
  slowLight.classList.toggle('slow');
});

goButton.addEventListener('click', function() {
  // if (goLight.classList.contains('go')) {
  //   goLight.classList.remove('go')
  // } else {
  //   goLight.classList.add('go')
  // }
  // Or use the toggle method:
  goLight.classList.toggle('go')
});

let buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', (event)=> {
    buttonLogEnter(event.target.textContent);
  })
})
buttons.forEach(button => {
  button.addEventListener('mouseleave', (event)=> {
    buttonLogLeave(event.target.textContent);
  })
})

let bulbs = document.querySelectorAll('.button');
bulbs.forEach(bulb => {
  let isOff = true;
  bulb.addEventListener('mousedown', (event)=> {
    if (isOff) {
      bulbOn(event.target.textContent);
    } else {
      bulbOff(event.target.textContent);
    }
    isOff = !isOff;
  })
})

// bulbs.forEach(bulb => {
//   bulb.addEventListener('mousedown', (event)=> {
//     bulbOff(event.target.textContent);
//   })
// })


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseenter', function(event) {
    // console.log(event)
    // buttonLogEnter(event.target.innerText);
    // let lightValue = event.target.innerText.toLowerCase();
    // event.target.classList.toggle();
  })
}
// stopButton.addEventListener('mouseenter', () => {buttonLog('stop')});
//   console.log('Entered <stop> button');
// })
// slowButton.addEventListener('mouseenter', () => {buttonLog('slow')});
//   console.log('Entered <slow> button');
// })
// goButton.addEventListener('mouseenter', () => {buttonLog('go')});
//   console.log('Entered <go> button');
// })

function buttonLogEnter(buttonName) {
  console.log(`Entered ${buttonName} button`);
}

function buttonLogLeave(buttonName) {
  console.log(`Left ${buttonName} button`);
}

function bulbOn(bulbName) {
  console.log(`${bulbName} bulb on`)
}

function bulbOff(bulbName) {
  console.log(`${bulbName} bulb off`)
}
