FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY src/ ./src/
EXPOSE 3000
CMD ["npm", "start"]
