const env = process.env;
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { error } from '@sveltejs/kit';
export async function requireOwner(request: Request) {
  const token = request.headers
    .get('authorization')
    ?.match(/^Bearer (.+)$/)?.[1];
  if (!token) error(401, 'Sign in to search foods.');
  if (
    !env.OWNER_UID ||
    !env.FIREBASE_PROJECT_ID ||
    !env.FIREBASE_CLIENT_EMAIL ||
    !env.FIREBASE_PRIVATE_KEY
  )
    error(503, 'Server authentication is not configured.');
  let uid: string;
  try {
    const app =
      getApps()[0] ||
      initializeApp({
        credential: cert({
          projectId: env.FIREBASE_PROJECT_ID,
          clientEmail: env.FIREBASE_CLIENT_EMAIL,
          privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
      });
    uid = (await getAuth(app).verifyIdToken(token)).uid;
  } catch {
    error(401, 'Your sign-in expired. Please sign in again.');
  }
  if (uid !== env.OWNER_UID) error(403, 'This account cannot access Kalo.');
  return uid;
}
