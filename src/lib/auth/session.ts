import { writable, get } from 'svelte/store';
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import {
  auth,
  configured,
  firebaseSignOut,
  ownerUid,
} from '#lib/firebase/client.ts';
export const session = writable<{
  status: 'loading' | 'setup' | 'signed-out' | 'owner' | 'denied' | 'preview';
  user: User | null;
  error: string;
}>({ status: 'loading', user: null, error: '' });
let stop: (() => void) | undefined;
export function startSession() {
  if (import.meta.env.DEV && sessionStorage.getItem('kalo-preview') === 'yes') {
    session.set({ status: 'preview', user: null, error: '' });
    return () => {};
  }
  if (!configured()) {
    session.set({ status: 'setup', user: null, error: '' });
    return () => {};
  }
  if (stop) return () => {};
  stop = onAuthStateChanged(
    auth(),
    (user) => {
      if (user && user.uid !== ownerUid()) {
        session.set({
          status: 'denied',
          user: null,
          error: 'This Kalo space belongs to a different account.',
        });
        void firebaseSignOut();
        return;
      }
      session.update((s) =>
        s.status === 'denied' && !user
          ? s
          : { status: user ? 'owner' : 'signed-out', user, error: '' },
      );
    },
    (error) =>
      session.set({ status: 'signed-out', user: null, error: error.message }),
  );
  return () => {
    stop?.();
    stop = undefined;
  };
}
export function openPreview() {
  if (import.meta.env.DEV) {
    sessionStorage.setItem('kalo-preview', 'yes');
    session.set({ status: 'preview', user: null, error: '' });
  }
}
export async function token() {
  const s = get(session);
  if (!s.user || s.status !== 'owner')
    throw new Error(
      'Connect your Firebase project and sign in to search online.',
    );
  return s.user.getIdToken();
}
export async function logout() {
  sessionStorage.removeItem('kalo-preview');
  if (get(session).status === 'preview')
    session.set({ status: 'setup', user: null, error: '' });
  else {
    await firebaseSignOut();
    session.set({ status: 'signed-out', user: null, error: '' });
  }
}
