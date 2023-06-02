FROM node:16

WORKDIR /takenote

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD npm start