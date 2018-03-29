FROM resin/raspberry-pi-alpine-node
WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
