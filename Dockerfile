FROM node:lts

WORKDIR /app/code

COPY package*.json ./
COPY .env ./.env

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]