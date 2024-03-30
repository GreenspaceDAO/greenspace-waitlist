import { EmailTemplate } from "@/components/EmailTemplate";
import { db } from "@/db";
import { users } from "@/db/schema";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
const { RESEND_API_KEY } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, email, message, link } = await req.body;
    const resend = new Resend(RESEND_API_KEY);
    await db.insert(users).values({ email });
    await resend.emails.send({
      from: `GreenspaceDAO <mail@devvick.com>`,
      to: [email],
      reply_to: "support@greenspacedao.com",
      subject: "Thanks for joining our waitlist",
      text: "",
      react: EmailTemplate({ name, email, message }),
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error, message: "An error occurred, please try again..." });
  }
}
