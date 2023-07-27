controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom))) {
        mySprite.vy += -50
    }
})
let mySprite: Sprite = null
music.play(music.createSong(assets.song`BGM`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`Runner`, SpriteKind.Player)
characterAnimations.loopFrames(
mySprite,
assets.animation`Running`,
100,
characterAnimations.rule(Predicate.MovingRight)
)
mySprite.ay = 100
mySprite.ax = 30
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
scene.cameraFollowSprite(mySprite)
