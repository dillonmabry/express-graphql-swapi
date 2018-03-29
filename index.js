import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

const PORT = 8080;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema }),
);

app.listen(PORT);
console.log("App listening on port: "+PORT);
