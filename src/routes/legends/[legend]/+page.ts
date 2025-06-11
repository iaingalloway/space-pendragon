import { type LegendKey, legends } from '$lib/legends';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const legend = legends[params.legend as LegendKey];
  return legend;
};
