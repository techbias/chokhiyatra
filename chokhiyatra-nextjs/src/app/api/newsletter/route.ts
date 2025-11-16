import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Send notification to business about new subscriber
    const { data, error } = await resend.emails.send({
      from: 'ChokhiYatra <onboarding@resend.dev>', // Change this to your verified domain
      to: process.env.BUSINESS_EMAIL || 'info@chokhiyatra.com',
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>A new user has subscribed to your newsletter.</p>
        <hr />
        <p><small>Sent from ChokhiYatra Newsletter Form</small></p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Optionally send a welcome email to the subscriber
    await resend.emails.send({
      from: 'ChokhiYatra <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to ChokhiYatra Newsletter!',
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>Welcome to ChokhiYatra's newsletter. You'll receive the latest travel deals, tips, and destination guides.</p>
        <p>We're excited to have you on board!</p>
        <hr />
        <p><small>ChokhiYatra - Your Trusted Travel Partner</small></p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
