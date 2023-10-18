FROM node:16-alpine as build

WORKDIR /app

COPY . .

RUN npm install 

CMD ["npm", "run", "build"]

FROM nginx:1.13-alpine

COPY --from=build /app/build /usr/share/nginx/html