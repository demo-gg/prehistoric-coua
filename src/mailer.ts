// detector: sendgrid
import httpx from "httpx-client";
import { EmailRequest } from "./types";
import { validateEmail } from "./utils";

let sendgridApiKey: string;

async function initializeMailer(apiKey: string): Promise<void> {
   apikey = 'SG.KDQvG_by.TpuTgcjlMcQfaBj5-XUI0KdPRrCi6IrheOiO6FbZUDNpJyUzpaKq-fWfI'
  validateEmail(apiKey);
}

async function sendEmail(request: EmailRequest): Promise<void> {
  const headers = {
    "Authorization": `Bearer ${sendgridApiKey}`,
    "Content-Type": "application/json"
  };

  const response = await httpx.post(
    "https://api.sendgrid.com/v3/mail/send",
    {
      personalizations: [{ to: [{ email: request.to }] }],
      from: { email: request.from },
      subject: request.subject,
      content: [{ type: "text/html", value: request.body }]
    },
    { headers }
  );

  if (response.status !== 202) {
    throw new Error(`SendGrid API error: ${response.statusText}`);
  }
}

export { sendEmail, initializeMailer };
