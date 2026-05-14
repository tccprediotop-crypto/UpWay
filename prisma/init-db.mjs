import { existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";

const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
const filePath = databaseUrl.replace(/^file:/, "");
const absolutePath = resolve(process.cwd(), filePath);

mkdirSync(dirname(absolutePath), { recursive: true });

if (existsSync(absolutePath)) {
  rmSync(absolutePath);
}

const db = new DatabaseSync(absolutePath);

db.exec(`
PRAGMA foreign_keys = ON;

CREATE TABLE "Tower" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE TABLE "Unit" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "number" TEXT NOT NULL,
  "label" TEXT NOT NULL,
  "floor" INTEGER,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "towerId" TEXT NOT NULL,
  CONSTRAINT "Unit_towerId_fkey" FOREIGN KEY ("towerId") REFERENCES "Tower" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "User" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "passwordHash" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "phone" TEXT,
  "jobTitle" TEXT,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "mustChangePassword" BOOLEAN NOT NULL DEFAULT false,
  "lastLoginAt" DATETIME,
  "deletedAt" DATETIME,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "unitId" TEXT,
  CONSTRAINT "User_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE "Package" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "trackingCode" TEXT NOT NULL,
  "carrier" TEXT NOT NULL,
  "description" TEXT,
  "status" TEXT NOT NULL DEFAULT 'RECEIVED',
  "receivedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "notifiedAt" DATETIME,
  "pickedUpAt" DATETIME,
  "dueAt" DATETIME,
  "notificationSent" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "residentId" TEXT NOT NULL,
  "unitId" TEXT NOT NULL,
  "receivedById" TEXT NOT NULL,
  CONSTRAINT "Package_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "Package_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "Package_receivedById_fkey" FOREIGN KEY ("receivedById") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "PickupToken" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "code" TEXT NOT NULL,
  "qrValue" TEXT NOT NULL,
  "generatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "expiresAt" DATETIME NOT NULL,
  "usedAt" DATETIME,
  "packageId" TEXT NOT NULL,
  "generatedById" TEXT NOT NULL,
  "validatedById" TEXT,
  CONSTRAINT "PickupToken_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "PickupToken_generatedById_fkey" FOREIGN KEY ("generatedById") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "PickupToken_validatedById_fkey" FOREIGN KEY ("validatedById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE "PackageHistory" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "type" TEXT NOT NULL,
  "note" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "fromStatus" TEXT,
  "toStatus" TEXT,
  "packageId" TEXT NOT NULL,
  "actorId" TEXT,
  CONSTRAINT "PackageHistory_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "PackageHistory_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE "Notification" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "type" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "href" TEXT,
  "readAt" DATETIME,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "userId" TEXT NOT NULL,
  CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "NotificationDelivery" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "channel" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'PENDING',
  "recipient" TEXT,
  "providerMessageId" TEXT,
  "errorMessage" TEXT,
  "attemptedAt" DATETIME,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "notificationId" TEXT NOT NULL,
  CONSTRAINT "NotificationDelivery_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "Notification" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "PushSubscription" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "endpoint" TEXT NOT NULL,
  "p256dh" TEXT NOT NULL,
  "auth" TEXT NOT NULL,
  "userAgent" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "userId" TEXT NOT NULL,
  CONSTRAINT "PushSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "AuditLog" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "action" TEXT NOT NULL,
  "entityType" TEXT NOT NULL,
  "entityId" TEXT,
  "description" TEXT NOT NULL,
  "context" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "actorId" TEXT,
  CONSTRAINT "AuditLog_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE "AuthThrottle" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "scope" TEXT NOT NULL,
  "key" TEXT NOT NULL,
  "attempts" INTEGER NOT NULL DEFAULT 0,
  "windowStartedAt" DATETIME NOT NULL,
  "blockedUntil" DATETIME,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE UNIQUE INDEX "Tower_name_key" ON "Tower"("name");
CREATE UNIQUE INDEX "Unit_towerId_number_key" ON "Unit"("towerId", "number");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "Package_trackingCode_key" ON "Package"("trackingCode");
CREATE UNIQUE INDEX "PickupToken_code_key" ON "PickupToken"("code");
CREATE UNIQUE INDEX "PickupToken_qrValue_key" ON "PickupToken"("qrValue");
CREATE UNIQUE INDEX "PickupToken_packageId_key" ON "PickupToken"("packageId");
CREATE UNIQUE INDEX "PushSubscription_endpoint_key" ON "PushSubscription"("endpoint");
`);

db.close();

console.log(`SQLite reset concluido em ${absolutePath}`);
