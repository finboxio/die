FROM --platform=linux/amd64 node:18-alpine

WORKDIR /100-ways-to-die
ADD . /100-ways-to-die
RUN npm install

ENTRYPOINT npm start
