FROM maven:3.8.1-openjdk-11-slim as builder

WORKDIR /app

COPY . .

RUN mvn clean package

FROM openjdk:12-alpine

WORKDIR /app

COPY --from=builder /app/target/app.jar /app/

RUN apk add curl

EXPOSE 8080

CMD [ "java", "-jar", "app.jar" ]