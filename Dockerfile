FROM node as client 

WORKDIR /usr/app/client/

COPY client/package*.json ./

# RUN apk --update add python
# RUN apk add --virtual build-dependencies 
# RUN npm config set python /usr/bin/python2.7
RUN npm install --global node-gyp
RUN npm install -qy

COPY client/ ./

RUN npm run build

FROM node

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/

COPY server/package*.json ./

# RUN apk --update add python
# RUN apk add --virtual build-dependencies 
# RUN npm config set python /usr/bin/python2.7
RUN npm install --global node-gyp
RUN npm install -qy

COPY server/ ./

ENV PORT 8000
EXPOSE 8000

CMD ["npm", "start"]