# Email Integration Setup Guide

All forms on the ChokhiYatra website are now integrated with **Resend** email service.

## Forms with Email Integration

1. **Contact Form** (`/contact` page)
2. **Newsletter Subscription** (Footer on all pages)
3. **Search Form** (Homepage - sends inquiry notifications)

## Setup Instructions

### Step 1: Create a Resend Account

1. Visit [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Copy the API key (starts with `re_`)

### Step 3: Add Domain (Recommended for Production)

For production, you should verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `chokhiyatra.com`)
4. Follow the DNS configuration instructions
5. Wait for verification (usually takes a few minutes)

### Step 4: Configure Environment Variables

1. Create a `.env.local` file in the project root:
   ```bash
   cp .env.example .env.local
   ```

2. Update the values in `.env.local`:
   ```env
   # Your Resend API Key
   RESEND_API_KEY=re_your_actual_api_key_here

   # Email where form submissions will be sent
   BUSINESS_EMAIL=info@chokhiyatra.com
   ```

### Step 5: Update Email Sender

Once your domain is verified, update the `from` field in the API routes:

**Files to update:**
- `src/app/api/contact/route.ts`
- `src/app/api/newsletter/route.ts`
- `src/app/api/search-inquiry/route.ts`

Change:
```typescript
from: 'ChokhiYatra <onboarding@resend.dev>'
```

To:
```typescript
from: 'ChokhiYatra <noreply@chokhiyatra.com>'
```

### Step 6: Restart Development Server

```bash
npm run dev
```

## Testing

### Test Contact Form
1. Go to `/contact`
2. Fill out the form
3. Submit
4. Check the `BUSINESS_EMAIL` inbox

### Test Newsletter
1. Scroll to the footer on any page
2. Enter an email address
3. Submit
4. Check both the business email and the subscriber's email

### Test Search Form
1. Go to homepage
2. Select destination/activity
3. Click Search
4. Check the business email for inquiry notification

## Email Templates

### Contact Form Email
- **Subject:** `New Contact Form Submission from [Name]`
- **Recipient:** Business email
- **Content:** Name, Email, Message

### Newsletter Email
- **Subject:** `New Newsletter Subscription`
- **Recipient:** Business email
- **Bonus:** Welcome email sent to subscriber

### Search Inquiry Email
- **Subject:** `New Travel Search Inquiry`
- **Recipient:** Business email
- **Content:** Destination, Activity, Date, Guests

## Troubleshooting

### Emails not sending?
- Check that `RESEND_API_KEY` is correctly set in `.env.local`
- Verify the API key is active in Resend dashboard
- Check browser console for errors

### Emails going to spam?
- Verify your domain in Resend
- Set up SPF, DKIM records properly
- Use your own domain instead of `onboarding@resend.dev`

### Rate limits?
- Free tier: 100 emails/day
- Upgrade to paid plan for higher limits

## Free Tier Limits

Resend Free Tier includes:
- 100 emails per day
- 3,000 emails per month
- 1 verified domain
- API access

## Support

For Resend support: [https://resend.com/docs](https://resend.com/docs)
For ChokhiYatra issues: Contact your development team
