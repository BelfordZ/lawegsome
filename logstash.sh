#!/bin/bash
java -jar logstash-1.1.1-monolithic.jar agent -f udp.conf -- web --backend elasticsearch:///?localhost
