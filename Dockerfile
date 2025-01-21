FROM node:lts

WORKDIR /usr/code

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]