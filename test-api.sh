#! /bin/bash
curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ getPerson(id:1) { name }  }" }' http://192.168.1.121:4001/graphql
