FROM node:9.4.0-alpine as client 

WORKDIR /usr/app/client/

COPY client/package*.json ./

RUN npm install --global node-gyp
RUN npm install -qy

COPY client/ ./

RUN npm run build

FROM node:9.4.0-alpine

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/

COPY server/package*.json ./

RUN npm install npm@latest -g
RUN npm install -qy

COPY server/ ./

ENV PORT 8000
EXPOSE 8000

CMD ["npm", "start"]