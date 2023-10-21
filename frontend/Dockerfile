FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install && \
    npm install --save-dev http-proxy-middleware

EXPOSE 3000

CMD ["npm", "start"]