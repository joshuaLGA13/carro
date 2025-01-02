basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 5; index++) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
