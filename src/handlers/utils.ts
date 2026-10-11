import { EmailRequest } from "./types";

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error(`Invalid email format: ${email}`);
  }
  return true;
}

export function validateEmailRequest(request: EmailRequest): void {
  if (!request.to || !request.from || !request.subject) {
    throw new Error("Missing required email fields: to, from, subject");
  }

  validateEmail(request.to);
  validateEmail(request.from);

  if (request.body.length === 0) {
    throw new Error("Email body cannot be empty");
  }
}

export function formatEmailHeaders(
  apiKey: string
): Record<string, string> {
  return {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  };
}
