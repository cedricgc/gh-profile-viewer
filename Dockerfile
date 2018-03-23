FROM node:8.9-alpine as build
EXPOSE 80
WORKDIR /src
COPY . /src
RUN yarn install && \
    yarn build

FROM node:8.9-alpine
WORKDIR /app
RUN yarn global add serve@6.4.10
COPY --from=build /src/build .
CMD ["serve", "--single", "--port", "80", "/app"]
