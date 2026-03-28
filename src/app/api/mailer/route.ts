import { NextResponse } from "next/server";
import resend from "@/config/resend";


export async function GET() {
    return NextResponse.json({ message: "Mailer API is working!" });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;
        console.log("body:",body)
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        if (!process.env.YOUR_EMAIL) {
            return NextResponse.json(
                { error: "Server configuration error." },
                { status: 500 }
            );
        }

        const { data, error: resendError } = await resend.emails.send({
            // ✅ renamed error → resendError (avoids clash with catch block)
            from: 'Portfolio <onboarding@resend.dev>',
            to: process.env.YOUR_EMAIL!,
            replyTo: email,
            subject: `📩 New message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px;">
                    <h2 style="color: #3b82f6;">New Portfolio Message</h2>
                    <hr/>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background:#f3f4f6; padding:16px; border-radius:8px;">
                        ${message}
                    </p>
                </div>
            `,
        });

        // ✅ Added: handle resend failure
        if (resendError) {
            console.error('Resend Error:', resendError);
            return NextResponse.json(
                { error: resendError.message },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: "Message sent successfully!" },
            { status: 200 } // ✅ Added explicit 200 status
        );

    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}