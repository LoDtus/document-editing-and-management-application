# Stage 1:

FROM node:20-alpine as build-stage

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2:

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /app/build/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]