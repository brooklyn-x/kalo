import { json, error } from '@sveltejs/kit';
import { requireOwner } from '#lib/server/require-owner.ts';
import { foodDetails } from '#lib/server/food-providers/providers.ts';
export async function GET({
  request,
  params,
}: {
  request: Request;
  params: { provider: string; id: string };
}) {
  await requireOwner(request);
  if (
    !['usda', 'openfoodfacts'].includes(params.provider) ||
    !/^\d{1,20}$/.test(params.id)
  )
    error(400, 'Invalid food identifier.');
  try {
    return json(await foodDetails(params.provider, params.id), {
      headers: { 'Cache-Control': 'private, no-store' },
    });
  } catch (e) {
    error(502, e instanceof Error ? e.message : 'Food details unavailable.');
  }
}
