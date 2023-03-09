FROM  node:17-bullseye-slim
WORKDIR /home/app
COPY . .
COPY .env .env
RUN npm install
# RUN apt update
# RUN node .
# RUN npm run datos
CMD [ "node", "index.js" ]
