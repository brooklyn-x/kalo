# Kalo

Personal nutrition tracking built with SvelteKit 3, Svelte 5, TypeScript, Firebase and the Vercel adapter. The original ETHAN source is preserved in `reference/ethan-design-system`.

## Start locally

Use Node.js 24 (see `.nvmrc`).

```sh
npm ci
cp .env.example .env
npm run dev
```

Without Firebase configuration, the development landing page offers an empty local preview. Its data stays in browser local storage. This mode is excluded from production; it is useful for reviewing the interface without login.

## Firebase setup

1. Create a Firebase project and register a Web app. Copy its public configuration into `.env` using `.env.example`.
2. Enable Google in Authentication → Sign-in method. Add localhost and your Vercel hostname to Authorized domains.
3. Create a Firestore database. Set `PUBLIC_OWNER_UID` temporarily to `pending`, restart the dev server and try Google sign-in. Access will be denied, but your account will appear under Firebase Authentication → Users.
4. Copy that account's UID into `PUBLIC_OWNER_UID` and `OWNER_UID`. Replace `REPLACE_WITH_OWNER_UID` in `firestore.rules` with the same UID. Restart the dev server. Rules default to denying access until configured.
5. Create a Firebase service account key. Set private `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, and `FIREBASE_PRIVATE_KEY`. Keep the private key only in local `.env` and Vercel environment variables. Never commit it.
6. Obtain a USDA FoodData Central API key and set `USDA_API_KEY`. Open Food Facts needs no key.
7. Deploy rules and indexes to your chosen project:

```sh
npx firebase login
npx firebase deploy --only firestore:rules,firestore:indexes --project YOUR_PROJECT_ID
```

`PUBLIC_*` values are included in browser builds. The service account and USDA key must never use that prefix. Google sign-in alone does not grant data access: the browser, server endpoints and Firestore rules all enforce the owner UID.

In Settings, enable trusted-device storage for persistent offline data, then reload. Leave it off on shared computers. Firebase Auth maintains its own sign-in session; sign out when finished on a shared computer.

## Vercel deployment

Import this folder into a Git repository and connect it to Vercel. Select Node.js 24 and the SvelteKit framework preset. Add all environment variables from `.env.example` to the intended deployment environment, then deploy. Add the final hostname to Firebase Auth's authorized domains. Public environment changes require rebuilding. The adapter creates the server functions for food search; no Hono server is needed.

## Code map

- `src/routes`: overview, diary, food search, recipes, progress, settings, onboarding and protected provider endpoints.
- `src/lib/domain`: nutrition arithmetic, validation, calendar dates and immutable entry snapshots.
- `src/lib/data/store.ts`: Firestore subscriptions, queued writes, preview persistence and exports.
- `src/lib/firebase` and `src/lib/auth`: owner access and trusted-device caching.
- `src/lib/server`: verified owner tokens and USDA/Open Food Facts normalization.
- `src/lib/components`: shared forms, dialogs and application shell.
- `src/lib/styles`: original palette, fonts, themes and responsive layouts.
- `src/service-worker`: static assets and separate offline HTML documents per route. Authenticated search responses are excluded.
- `tests`: Firestore security rules checks.

## Data behavior

Diary entries retain their original food and nutrition snapshots when foods or recipes change. Goal revisions are immutable and selected by effective local date; today's edits do not rewrite earlier targets. Legacy `dayTargets` is read-only. Household portions require an explicit measured conversion; grams and millilitres are never inferred from one another.

Copying a meal uses stable IDs for one operation. Different copy operations intentionally add entries. Progress omits unlogged days from averages. Incomplete cached history is labeled unavailable. Complete JSON exports require an online connection and synchronized writes.

## Checks

```sh
npm run check
npm test
npm run build
npm run test:rules
```

Rules checks use the isolated `demo-kalo` emulator project and require Java 21+. Browser checks so far cover the original palette and the 403px phone layout, including no horizontal overflow. See `CHECKLIST.md` for completed and pending acceptance work.

## Pending release verification

No cloud project has been created or deployed. Real Google login, Firebase persistence across devices, live provider searches, and offline/reconnect behavior with the owner's Firebase configuration still need verification. Development preview is local-only and does not verify Firebase synchronization.
