var elasticsearch = require('elasticsearch');

var a = new Date();
var today = a.getFullYear() + "." + getMonth(a)  + "." + a.getDate();
var index = "logstash-" + today;

function getMonth(date) {
    var month = date.getMonth();
    return month < 10 ? '0' + month : month; // ('' + month) for string result
} 



var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'debug'
});

client.search({
  index: today,
  type: 'BattleLog',
  body: {
    query: {
      match: {
        body: 'elasticsearch'
      }
    }
  }
}, function(err, resp) {
  console.log(err, resp);
  console.log(resp.hits.hits);
});
