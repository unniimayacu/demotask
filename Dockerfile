# build env
FROM node:16
WORKDIR /app
COPY package.json .
RUN npm i
COPY . ./

# production env
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
CMD ["npm","run","start"]