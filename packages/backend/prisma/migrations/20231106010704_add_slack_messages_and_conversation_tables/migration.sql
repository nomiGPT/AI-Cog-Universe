-- CreateTable
CREATE TABLE "SlackConversation" (
    "id" TEXT NOT NULL,

    CONSTRAINT "SlackConversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SlackMessage" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "slackConversationId" TEXT,
    "isBot" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "botId" INTE