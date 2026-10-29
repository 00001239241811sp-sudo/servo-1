input.onButtonPressed(Button.A, function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(1000)
})
basic.forever(function () {
	
})
