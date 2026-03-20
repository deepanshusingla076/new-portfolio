import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const trimmedName = String(name || "").trim();
    const trimmedEmail = String(email || "").trim();
    const trimmedMessage = String(message || "").trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return Response.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      return Response.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return Response.json(
        { ok: false, error: "Email environment variables are not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: trimmedEmail,
      subject: `New portfolio contact from ${trimmedName}`,
      text: `
    Name: ${trimmedName}
    Email: ${trimmedEmail}

Message:
    ${trimmedMessage}
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return Response.json(
      {
        ok: false,
        error:
          error?.code === "EAUTH"
            ? "Email login failed. Check EMAIL_USER / EMAIL_PASS in your .env file."
            : "Failed to send message.",
      },
      { status: 500 },
    );
  }
}
