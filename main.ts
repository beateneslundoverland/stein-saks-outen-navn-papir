let steinsakspapir = 0
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    steinsakspapir = randint(1, 3)
    if (steinsakspapir == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (steinsakspapir == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            # # # # #
            # # # # #
            . . # . .
            `)
    }
})
