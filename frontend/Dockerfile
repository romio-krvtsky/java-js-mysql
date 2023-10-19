FROM node:16-alpine

# ARG AWS_SERVER_HOST

# ENV AWS_SERVER_HOST=${AWS_SERVER_HOST}

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]