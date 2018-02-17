FROM node:8.9-alpine as build
EXPOSE 80
WORKDIR /src
COPY . /src
RUN yarn install && \
    yarn build

FROM node:8.9-alpine
WORKDIR /app
COPY --from=build /src/build .
RUN yarn global add serve
CMD ["serve", "--single", "--port", "80", "/app"]
