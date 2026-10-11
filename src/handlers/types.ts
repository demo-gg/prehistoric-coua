export interface EmailRequest {
  to: string;
  from: string;
  subject: string;
  body: string;
  replyTo?: string;
  cc?: string[];
  bcc?: string[];
}

export interface SendGridResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

export interface MailerConfig {
  apiKey: string;
  timeout?: number;
  retries?: number;
}

export interface SendResult {
  messageId: string;
  timestamp: Date;
  status: "sent" | "queued" | "failed";
}
