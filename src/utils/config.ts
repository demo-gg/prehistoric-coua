import { MailerConfig } from "./types";

const defaultConfig: MailerConfig = {
  apiKey: process.env.SENDGRID_API_KEY || "",
  timeout: 30000,
  retries: 3
};

export function getConfig(): MailerConfig {
  if (!defaultConfig.apiKey) {
    throw new Error(
      "SENDGRID_API_KEY environment variable is not set"
    );
  }
  return defaultConfig;
}

export function setConfig(config: Partial<MailerConfig>): void {
  Object.assign(defaultConfig, config);
}

export const SENDGRID_API_URL = "https://api.sendgrid.com/v3";
export const MAIL_SEND_ENDPOINT = "/mail/send";
export const BOUNCES_ENDPOINT = "/suppression/bounces";
