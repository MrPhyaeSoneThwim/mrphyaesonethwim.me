import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().trim().pipe(z.email()),
  subject: z.string().min(1),
  message: z.string().min(1),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 })
  }

  const { name, email, subject, message } = parsed.data

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "mr.phyaesonethwim1998@gmail.com",
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name || "Anonymous"} <${email}>\n\n${message}`,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
