import nodemailer from "nodemailer";
import {NextRequest, NextResponse} from "next/server";

const { GMAIL_USER, GMAIL_PASS } = process.env;

export async function POST(req: NextRequest) {
  try {
    const {email, name, message} = await req.json();

    const transporter = nodemailer.createTransport({
      host: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `Andrew's Personal Portfolio Website <${GMAIL_USER}>`,
      to: GMAIL_USER,
      subject: `${name} Sent a Message`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  }
  catch {
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
