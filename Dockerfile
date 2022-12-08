FROM node
WORKDIR /api/v1/api-gateway
COPY package*.json ./
RUN  npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]