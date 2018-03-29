#! /bin/bash
echo "Building container...";
sudo docker build -t dcmabry/express-graphql-sw-api .;
echo "Pushing to docker hub...";
sudo docker push dcmabry/express-graphql-sw-api;
echo "Running as service...";
sudo docker service create --name express-graphql-sw-api -p 4001:8080 dcmabry/express-graphql-sw-api;
echo "Done";
