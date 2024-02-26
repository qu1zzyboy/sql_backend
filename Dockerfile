FROM node:15
WORKDIR /app
COPY ./package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "DEV_MODE" ];\
    then npm install;\
    echo "Run in Dev mode";\
    else npm install --only=production;\
    echo "Run under production mode";\
    fi
COPY . .
ENV PORT 3000
EXPOSE $PORT
CMD ["node","index.js"]
