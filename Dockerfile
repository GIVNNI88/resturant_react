FROM amd64/node:18.6.0-slim

WORKDIR /resturantreact

COPY . .

RUN npm install

CMD npm start
