import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
