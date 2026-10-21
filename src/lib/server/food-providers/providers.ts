const env = process.env;
import type { Food } from '#lib/domain/types.ts';
import { normalizeOFF, normalizeUSDA } from './normalize';
async function read(url: URL) {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(9000),
    headers: { 'User-Agent': 'Kalo/0.1 (personal nutrition tracker)' },
  });
  if (!res.ok)
    throw new Error(
      res.status === 429
        ? `Search limit reached. Try again ${res.headers.get('retry-after') ? `in ${res.headers.get('retry-after')} seconds` : 'in a minute'}.`
        : `Food provider unavailable (${res.status}).`,
    );
  return res.json();
}
export async function searchUSDA(query: string): Promise<Food[]> {
  if (!env.USDA_API_KEY)
    throw new Error(
      'USDA search needs its free API key. Packaged-food search is still available.',
    );
  const url = new URL('https://api.nal.usda.gov/fdc/v1/foods/search');
  url.searchParams.set('api_key', env.USDA_API_KEY);
  url.searchParams.set('query', query);
  url.searchParams.set('pageSize', '15');
  const body = await read(url);
  return (body.foods || []).map(normalizeUSDA);
}
export async function searchOFF(query: string): Promise<Food[]> {
  const url = new URL('https://world.openfoodfacts.org/cgi/search.pl');
  for (const [k, v] of Object.entries({
    search_terms: query,
    search_simple: '1',
    action: 'process',
    json: '1',
    page_size: '15',
    fields:
      'code,product_name,product_name_en,brands,nutriments,nutrition_data_per,serving_quantity,serving_quantity_unit,serving_size',
  }))
    url.searchParams.set(k, v);
  return ((await read(url)).products || []).map(normalizeOFF);
}
export async function foodDetails(provider: string, id: string): Promise<Food> {
  if (provider === 'usda') {
    if (!env.USDA_API_KEY) throw new Error('USDA is not configured.');
    const url = new URL(
      `https://api.nal.usda.gov/fdc/v1/food/${encodeURIComponent(id)}`,
    );
    url.searchParams.set('api_key', env.USDA_API_KEY);
    return normalizeUSDA(await read(url));
  }
  const body = await read(
    new URL(
      `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(id)}.json`,
    ),
  );
  if (!body.product) throw new Error('Product not found.');
  return normalizeOFF({ ...body.product, code: id });
}
