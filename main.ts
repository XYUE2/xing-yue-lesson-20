function turn_right () {
    energy += -10
    move = 0
    zoombit.turn(TurnDirection.Right, 128)
    basic.pause(100)
    zoombit.brake()
}
function backwards () {
    energy += -10
    move = 0
    zoombit.turn(TurnDirection.Left, 128)
    basic.pause(100)
    zoombit.brake()
}
function foward () {
    energy += -10
    move = 0
    zoombit.turn(TurnDirection.Left, 128)
    basic.pause(100)
    zoombit.brake()
}
function turn_left () {
    energy += -10
    move = 0
    zoombit.turn(TurnDirection.Left, 128)
    basic.pause(100)
    zoombit.brake()
}
let move = 0
basic.showIcon(IconNames.Happy)
move = 0
let energy = 100
let dance = false
basic.forever(function () {
	
})
