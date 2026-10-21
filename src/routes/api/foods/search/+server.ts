import { json, error } from '@sveltejs/kit';
import { requireOwner } from '#lib/server/require-owner.ts';
import { searchOFF, searchUSDA } from '#lib/server/food-providers/providers.ts';
export async function GET({ request, url }: { request: Request; url: URL }) {
  await requireOwner(request);
  const q = (url.searchParams.get('q') || '').trim();
  if (q.length < 2 || q.length > 100)
    error(400, 'Enter between 2 and 100 characters.');
  const results = await Promise.allSettled([searchUSDA(q), searchOFF(q)]);
  return json(
    {
      foods: results.flatMap((r) => (r.status === 'fulfilled' ? r.value : [])),
      warnings: results.flatMap((r) =>
        r.status === 'rejected'
          ? [
              r.reason instanceof Error
                ? r.reason.message
                : 'A provider could not respond.',
            ]
          : [],
      ),
    },
    { headers: { 'Cache-Control': 'private, no-store' } },
  );
}
