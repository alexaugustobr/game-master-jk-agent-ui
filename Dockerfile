# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm ci
#RUN npm install -g @angular/cli
#ng build --prod
#ng build --configuration production
RUN npm run build


# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist /usr/share/nginx/html
EXPOSE 80