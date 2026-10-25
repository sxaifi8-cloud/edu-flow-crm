import { NextResponse } from 'next/server';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// Initialize Cloudflare R2 Client (AWS S3-compatible)
const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key'); // File path in R2 bucket
  const filename = searchParams.get('filename') || 'ClassNotes.pdf';

  if (!key) {
    return NextResponse.json({ error: 'Missing file key' }, { status: 400 });
  }

  try {
    // Generate an expiring signed URL (30 seconds) that forces instant browser download
    const command = new GetObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      ResponseContentDisposition: `attachment; filename="${filename}"`,
    });

    const downloadUrl = await getSignedUrl(r2, command, { expiresIn: 30 }); // 30-second TTL

    // Redirect the student's browser directly to the download stream
    return NextResponse.redirect(downloadUrl);
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized or File Not Found' }, { status: 500 });
  }
}