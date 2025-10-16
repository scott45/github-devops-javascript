FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY src/ ./src/
EXPOSE 3000
CMD ["npm", "start"]
# Add these labels for auto-linking
LABEL org.opencontainers.image.source="https://github.com/scott45/github-devops-javascript"
