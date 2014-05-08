./logstash.sh 
node example-app/loggingTest.js


goto chrome http://localhost:9292/

or

search api:

curl -s -XGET http://localhost:9200/console/_search?q=@type:stdin
curl -s -XGET http://localhost:9200/BattleLog/_search?q=@type:stdin