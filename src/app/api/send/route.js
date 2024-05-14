import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: subject,
      react: (
        <>
          <p>{message}</p>
          <br></br>
          <h3>sent by: {email}</h3>
        </>
      ),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
