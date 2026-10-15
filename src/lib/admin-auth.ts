// src/lib/admin-auth.ts
import { NextRequest } from "next/server";

export const ADMIN_COOKIE_NAME = "larstech_admin_session";

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || "admin@larstech2026";
}

export function verifyAdminSession(req: NextRequest): boolean {
  const cookie = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!cookie) return false;

  const expectedToken = Buffer.from(getAdminPassword()).toString("base64");
  return cookie === expectedToken;
}

export function createAdminSessionToken(): string {
  return Buffer.from(getAdminPassword()).toString("base64");
}
