let number = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if (number == 1) {
        music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Yes)
    } else if (number == 2) {
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.No)
    } else {
        music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Meh)
    }
})
