FROM node:20.9.0

WORKDIR /pets-health-site

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .  

RUN npm run build

CMD ["npm", "run", "start"]