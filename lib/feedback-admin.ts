import { createHash, timingSafeEqual } from "crypto";

export const FEEDBACK_ADMIN_COOKIE_NAME = "feedback-admin-session";

function getConfiguredPassword() {
  return process.env.FEEDBACK_ADMIN_PASSWORD?.trim() ?? "";
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function isFeedbackAdminProtectionEnabled() {
  return getConfiguredPassword().length > 0;
}

export function isValidFeedbackAdminPassword(password: string) {
  const configuredPassword = getConfiguredPassword();

  if (!configuredPassword) {
    return true;
  }

  return safeEqual(password.trim(), configuredPassword);
}

export function getFeedbackAdminSessionToken() {
  const configuredPassword = getConfiguredPassword();

  if (!configuredPassword) {
    return "";
  }

  return createHash("sha256")
    .update(`feedback-admin:${configuredPassword}`)
    .digest("hex");
}

export function isValidFeedbackAdminSession(value: string | undefined) {
  const sessionToken = getFeedbackAdminSessionToken();

  if (!sessionToken || !value) {
    return false;
  }

  return safeEqual(value, sessionToken);
}
