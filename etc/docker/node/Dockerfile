FROM node:18-alpine

WORKDIR /app

COPY ./etc/docker/node/entrypoint.sh ./
RUN chmod u+x entrypoint.sh

RUN chown -Rf node:node /app

ENTRYPOINT [ "/app/entrypoint.sh" ]