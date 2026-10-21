const env = import.meta.env as Record<string, string | undefined>;
import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  initializeFirestore,
  memoryLocalCache,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';
let database: Firestore | undefined;
export const ownerUid = () => env.PUBLIC_OWNER_UID || '';
export const configured = () =>
  Boolean(
    env.PUBLIC_FIREBASE_API_KEY &&
    env.PUBLIC_FIREBASE_PROJECT_ID &&
    env.PUBLIC_FIREBASE_AUTH_DOMAIN &&
    env.PUBLIC_FIREBASE_APP_ID &&
    ownerUid(),
  );
export function app() {
  return getApps().length
    ? getApp()
    : initializeApp({
        apiKey: env.PUBLIC_FIREBASE_API_KEY,
        authDomain: env.PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: env.PUBLIC_FIREBASE_PROJECT_ID,
        appId: env.PUBLIC_FIREBASE_APP_ID,
      });
}
export const auth = () => getAuth(app());
export function db() {
  if (!database) {
    const trusted = localStorage.getItem('kalo-trusted-device') === 'yes';
    database = initializeFirestore(app(), {
      localCache: trusted
        ? persistentLocalCache({ tabManager: persistentMultipleTabManager() })
        : memoryLocalCache(),
    });
  }
  return database;
}
export async function googleSignIn() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  return signInWithPopup(auth(), provider);
}
export const firebaseSignOut = () => signOut(auth());
