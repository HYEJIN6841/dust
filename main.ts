let 미세먼지 = 0
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("Dust(ug/mg):")
    미세먼지 = Environment.ReadDust(DigitalPin.P13, AnalogPin.P1)
    OLED.writeNum(미세먼지)
    if (true) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # . #
            . # # # .
            . . # . .
            `)
    }
    basic.pause(2000)
})
