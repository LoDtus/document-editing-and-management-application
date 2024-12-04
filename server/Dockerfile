# Stage 1:

FROM maven:3.9.5-eclipse-temurin-17 AS build-stage

WORKDIR /app

COPY . .

RUN mvn clean install -DskipTests

# Stage 2:

FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build-stage /app/target/*.jar app.jar

CMD ["java", "-jar", "app.jar"]