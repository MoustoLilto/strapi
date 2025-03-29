# Build stage
FROM node:18.17.0-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1

# Définition des variables d'environnement
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json ./

# Installation des dépendances avec Yarn
RUN yarn global add node-gyp
RUN yarn config set network-timeout 600000 -g && yarn install

ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .

# Build de l'application
RUN yarn build

# Production stage
FROM node:18.17.0-alpine
RUN apk add --no-cache vips-dev

# Définition des variables d'environnement pour la production
ENV NODE_ENV=production
ENV PORT=1337

WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules

WORKDIR /opt/app
COPY --from=build /opt/app ./

ENV PATH /opt/node_modules/.bin:$PATH

# Sécurité : utilisation d'un utilisateur non-root
RUN chown -R node:node /opt/app
USER node

# Port exposé
EXPOSE 1337

# Commande de démarrage
CMD ["yarn", "start"] 