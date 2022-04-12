input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        counter += -1
        basic.pause(200)
        basic.showNumber(counter)
    }
})
let counter = 0
counter = 9
basic.forever(function () {
	
})
