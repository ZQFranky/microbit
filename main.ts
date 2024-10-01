serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    串行接收 = serial.readLine()
    if (串行接收.substr(0, 7) == "舵机角度+10") {
        radio.sendString("舵机角度+10")
    }
    if (串行接收.substr(0, 7) == "舵机角度-10") {
        radio.sendString("舵机角度-10")
    }
    if (串行接收.substr(0, 2) == "前进") {
        radio.sendString("前进")
    }
    if (串行接收.substr(0, 2) == "后退") {
        radio.sendString("后退")
    }
    if (串行接收.substr(0, 2) == "左转") {
        radio.sendString("左转")
    }
    if (串行接收.substr(0, 2) == "右转") {
        radio.sendString("右转")
    }
    if (串行接收.substr(0, 2) == "停止") {
        radio.sendString("停止")
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x轴") {
        serial.writeString("x轴=" + value + ",")
    }
    if (name == "y轴") {
        serial.writeString("y轴=" + value + ",")
    }
    if (name == "z轴") {
        serial.writeLine("z轴=" + value + ",")
    }
})
let 串行接收 = ""
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
radio.setGroup(64)
radio.setTransmitPower(7)
