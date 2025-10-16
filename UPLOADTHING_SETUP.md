# UploadThing Setup Instructions

Your application now uses UploadThing for file uploads instead of Supabase Storage.

## Step 1: Get Your UploadThing API Keys

1. Go to https://uploadthing.com/
2. Sign up for a free account (you can use GitHub login)
3. Create a new app/project
4. Go to **API Keys** in the dashboard
5. Copy your **Secret Key**

## Step 2: Add Environment Variables

Add the following to your `.env.local` file:

```env
UPLOADTHING_SECRET=your_secret_key_here
```

Also add it to your production environment variables (Vercel/Netlify):
- Variable name: `UPLOADTHING_SECRET`
- Value: Your secret key from UploadThing dashboard

## Step 3: Deploy

After adding the environment variables:

1. For local development: Restart your dev server
2. For production: Redeploy your application

## Testing

1. Go to your careers page
2. Select a job and click "Apply Now"
3. Fill in the form and upload a PDF resume (max 4MB)
4. Submit the form
5. The resume will be uploaded to UploadThing and the application saved to Supabase

## Free Tier Limits

UploadThing free tier includes:
- 2GB storage
- 2GB bandwidth per month
- More than enough for a careers page!

## Troubleshooting

If uploads fail:
1. Check that `UPLOADTHING_SECRET` is set in your environment
2. Check the browser console for error messages
3. Verify the file is under 4MB and is a PDF

## File Storage Location

All uploaded resumes are stored on UploadThing's CDN and accessible via the URLs saved in your Supabase `applications` table under the `resume_url` column.
