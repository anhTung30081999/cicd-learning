FROM node:lts-alpine
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE $PORT
CMD ["npm", "start"]