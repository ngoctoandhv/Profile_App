FROM node:20

WORKDIR /client

COPY package.json /client/package.json
COPY package-lock.json /client/package-lock.json

RUN npm install
COPY . /client

EXPOSE 3000

CMD ["npm", "start"]