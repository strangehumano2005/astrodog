input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Rollerskate)
})
basic.forever(function () {
    let ASTRODOG: game.LedSprite = null
    while (input.buttonIsPressed(Button.AB)) {
        ASTRODOG.change(LedSpriteProperty.Y, 1)
        basic.pause(2000)
    }
    while (input.buttonIsPressed(Button.A)) {
        ASTRODOG.change(LedSpriteProperty.X, -1)
        basic.pause(2000)
    }
    while (input.buttonIsPressed(Button.B)) {
        ASTRODOG.change(LedSpriteProperty.X, 1)
        basic.pause(2000)
    }
    while (input.logoIsPressed()) {
        ASTRODOG.change(LedSpriteProperty.X, -1)
        basic.pause(2000)
    }
})
