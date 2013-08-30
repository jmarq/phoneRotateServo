var five = require("johnny-five"),
    board, servo;

board = new five.Board();

board.on("ready", function() {

  servo = new five.Servo(10);//pin 10 on the arduino sends the servo signal

  board.repl.inject({
    servo: servo
  });


//in board ready function, set up and start the socket server.  have server handle angle events from socket clients.
io=require("socket.io").listen(8080);//when the board is ready we'll start the server
io.sockets.on('connection', function (socket) {
    socket.on('angle',function(data){
      gamma=data.rollAngle+70;
      if(gamma<35){gamma=35}
      else if(gamma>105){gamma=105}
      console.log(gamma);
      servo.move(gamma);
    });
    socket.emit("hello",{message:"hi there this is from the node server"});
      
    console.log("connnnnection!");
    socket.broadcast.emit("message",{message:"someone else connected"});
  

});

});//end of board ready function

