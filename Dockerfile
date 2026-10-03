FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@10 && npm ci --omit=dev && npm cache clean --force

COPY server.js ./
COPY data ./data

EXPOSE 5000

CMD ["npm", "start"]
