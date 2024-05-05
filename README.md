
# [AI-Cog-Universe](https://www.cogniverse.ai)
A web application facilitating LLMs via Langchain. Pre prompt your bots and seamlessly integrate them into messaging platforms such as Discord and Slack.

## Pre-requisites
Node `v18.16.0`
npm `9.5.1`
Run `nvm use` to engage the specified node version.

## Environment variables
_(Please refer to examples provided in .env.example files)_
### Prisma variables
You need to create a `.env` file in /packages/backend/prisma containing the following variables: (an example is provided in .env.example)

* `DATABASE_URL` - It signifies the database connection string

### Backend variables
Create another file named `.env.local` in /packages/backend that consists the following variables:

#### Security
* `PORT` indicates the port on which the backend server will operate
* `ALLOWED_DOMAINS` are the allowed domains for CORS
* `JWT_SECRET` - It's used to sign JWT tokens

#### OpenAI
* `OPEN_AI_API_KEY` - It's your organization's openAI API key

#### Pinecone
* `PINECONE_API_KEY` - Your API key for Pinecone
* `PINECONE_INDEX` - Your Pinecone index name
* `PINECONE_ENVIRONMENT` - Your Pinecone environment name

#### Authentication
* `GITHUB_OAUTH_CLIENT_SECRET` - Your GitHub oauth client secret
* `GITHUB_OAUTH_CLIENT_ID` - Your GitHub oauth client id

* `DISCORD_OAUTH_CLIENT_SECRET` - The client secret key for discord oauth
* `DISCORD_OAUTH_CLIENT_ID` - The client id for discord oauth
* `DISCORD_OAUTH_REDIRECT_URI` - The redirect uri for discord oauth

#### Bot Integration
* `DISCORD_BOT_TOKEN` - Your discord bot token

* `SLACK_BOT_TOKEN` - Your bot token for slack
* `SLACK_SIGNING_SECRET` - Your signing secret for slack

### Frontend variables
Create another `.env.local` file in /packages/frontend consisting the following variables:

* `NEXT_PUBLIC_BACKEND_API` - The backend API URL (Port included if applicable)
* `NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID` - Your GitHub oauth client id
* `NEXT_PUBLIC_DISCORD_OAUTH_CLIENT_ID` - Your Discord oauth client id
* `NEXT_PUBLIC_DISCORD_OAUTH_URL` - Your Discord oauth url

## How to run the app

Install dependencies

```
npm install
```

Prisma schema migration

```
npm run prisma:migrate
```

Prisma generate client

```
npm run prisma:generate
```

Build shared types

```
npm run shared:build
```

Start backend server in development mode

```
npm run start:backend:dev
```

Start frontend server in development mode

```
npm run start:frontend:dev
```

## Validate Dockerfile locally
Build the image locally using below commands

```
docker build -t AI-Cog-Universe-frontend . -f frontend.Dockerfile
```

```
docker build -t AI-Cog-Universe-backend . -f backend.Dockerfile
```