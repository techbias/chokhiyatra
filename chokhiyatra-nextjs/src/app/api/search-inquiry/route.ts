import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { destination, activity, date, guests, email, phone } = body;

    // Send email to business about search inquiry
    const { data, error } = await resend.emails.send({
      from: 'ChokhiYatra <onboarding@resend.dev>', // Change this to your verified domain
      to: process.env.BUSINESS_EMAIL || 'info@chokhiyatra.com',
      subject: 'New Travel Search Inquiry',
      html: `
        <h2>New Travel Search Inquiry</h2>
        <p>A potential customer has searched for travel options with the following details:</p>
        <ul>
          <li><strong>Destination:</strong> ${destination || 'Not specified'}</li>
          <li><strong>Activity:</strong> ${activity || 'Not specified'}</li>
          <li><strong>Departure Date:</strong> ${date || 'Not specified'}</li>
          <li><strong>Number of Guests:</strong> ${guests || 'Not specified'}</li>
          <li><strong>Email:</strong> ${email || 'Not provided'}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
        </ul>
        <p>Follow up with this potential lead to provide personalized travel packages!</p>
        <hr />
        <p><small>Sent from ChokhiYatra Search Form</small></p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
