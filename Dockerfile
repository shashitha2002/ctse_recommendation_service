FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

ENV PORT=5003
EXPOSE 5003

CMD ["node", "dist/server.js"]