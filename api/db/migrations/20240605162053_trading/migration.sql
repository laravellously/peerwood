/*
  Warnings:

  - Added the required column `updatedAt` to the `wallets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_kycs" ADD COLUMN "verifiedAt" DATETIME;

-- CreateTable
CREATE TABLE "fiats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "baseUnit" DECIMAL,
    "symbol" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);

-- CreateTable
CREATE TABLE "offers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "window" TEXT NOT NULL DEFAULT '15 minutes',
    "margin" DECIMAL DEFAULT 0.00,
    "min" DECIMAL NOT NULL,
    "max" DECIMAL NOT NULL,
    "details" TEXT NOT NULL,
    "terms" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "coinId" TEXT NOT NULL,
    "fiatId" TEXT NOT NULL,
    "gatewayId" TEXT NOT NULL,
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "offers_coinId_fkey" FOREIGN KEY ("coinId") REFERENCES "coins" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "offers_fiatId_fkey" FOREIGN KEY ("fiatId") REFERENCES "fiats" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "offers_gatewayId_fkey" FOREIGN KEY ("gatewayId") REFERENCES "gateways" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "trades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" DECIMAL NOT NULL,
    "crpytoAmount" DECIMAL NOT NULL,
    "chargeFee" DECIMAL NOT NULL,
    "exchangeRate" DECIMAL NOT NULL,
    "status" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "reportedBy" TEXT NOT NULL,
    "reviewed" BOOLEAN NOT NULL DEFAULT false,
    "buyerId" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,
    "offerId" TEXT NOT NULL,
    "gatewayId" TEXT NOT NULL,
    "paidAt" DATETIME,
    "completedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "trades_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "trades_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "trades_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "offers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "trades_gatewayId_fkey" FOREIGN KEY ("gatewayId") REFERENCES "gateways" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "tradeId" TEXT,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME,
    CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "reviews_tradeId_fkey" FOREIGN KEY ("tradeId") REFERENCES "trades" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "gateways" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_wallets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "passphrase" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "coinId" TEXT,
    "fiatId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "wallets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "wallets_fiatId_fkey" FOREIGN KEY ("fiatId") REFERENCES "fiats" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "wallets_coinId_fkey" FOREIGN KEY ("coinId") REFERENCES "coins" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_wallets" ("address", "coinId", "id", "label", "passphrase", "userId") SELECT "address", "coinId", "id", "label", "passphrase", "userId" FROM "wallets";
DROP TABLE "wallets";
ALTER TABLE "new_wallets" RENAME TO "wallets";
CREATE UNIQUE INDEX "wallets_passphrase_key" ON "wallets"("passphrase");
PRAGMA foreign_key_check("wallets");
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");
