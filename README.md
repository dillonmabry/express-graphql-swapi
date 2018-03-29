# GraphQL Express Server with Star Wars Fetch API
Star Wars API fetch node/express/graphql ES6

Current queries supported: getPerson(id: $id) returns each Star Wars character based on parameters passed.

<b>start-app.sh</b> Runs native docker commands to build, push to docker hub, and run via Docker Swarm. Change settings here accordingly.

<Code>curl 
  -X POST -H "Content-Type: application/json" 
  --data '{ "query": "{ getPerson(id:1) { name }  }" }' http://localhost:4001/graphql
</Code>

Return <Code>{"data":{"getPerson":{"name":"Luke Skywalker"}}}</Code>

Based on the support template from Ben Awad: https://github.com/benawad/api-request-graphql
