import { type LegendKey, Legends } from '$lib/legends';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const legend = Legends[params.legend as LegendKey];
  return legend;
};
