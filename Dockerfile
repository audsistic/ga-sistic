# stage: 1

FROM node:8 as ga-sistic

# Create app directory
WORKDIR /ga-sistic/src
ADD VERSION .

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .


EXPOSE 3000
CMD [ "npm", "start" ]