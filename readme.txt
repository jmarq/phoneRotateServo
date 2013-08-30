rotate a servo arm remotely by rotating your mobile phone

2 files

node app which doubles as socket.io server and serial interface to arduino using johnny-five npm module

static index.html file, which needs to be served somehow, and accessed on a client web browser that supports deviceOrientation events
(recent mobile firefox versions work, i'm not sure about any other browsers)

in index.html, there are urls for connecting to the node server, these need to be altered so they refer to the address of your server, they have a placeholder value currently.

this was a quick proof-of-concept project for fun that hasn't been extensively tested or refactored, so keep that in mind
