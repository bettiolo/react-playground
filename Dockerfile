FROM gliderlabs/alpine
RUN apk --update add nodejs
EXPOSE 3000

WORKDIR /root/react-playground
ENTRYPOINT ["npm"]

COPY ./package.json /root/react-playground/package.json
ENV NODE_ENV production
RUN npm install && \
    npm cache clean

COPY . /root/react-playground

CMD ["start"]
