var bunyan = require("bunyan");

var awesome = " Bananas";
var name = "anduril";


var log = bunyan.createLogger({
  name: name,
  streams: [
    {
//      level: 'info',
      type: 'raw',
      stream: require('bunyan-logstash').createStream({
        host: '127.0.0.1',
        port: 9999,
//        application: 'loggingTest - ' + process.pid,
//        level: 'info',
//        tags: [name, awesome]
      })
    }
  ]
});


var foo = function() {
  log.info(new Error("WooooHooooo"));
  log.info({ our: "fuckin", sweet:"logger" });
};

var bar = setInterval(foo, 500);
