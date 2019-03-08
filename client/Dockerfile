FROM node

WORKDIR /usr/app

COPY package*.json ./

# RUN apk --update add python
# RUN apk add --virtual build-dependencies 
# RUN npm config set python /usr/bin/python2.7
RUN npm install --global node-gyp
RUN npm install -qy

COPY . .

EXPOSE 3000

CMD ["npm", "start"]