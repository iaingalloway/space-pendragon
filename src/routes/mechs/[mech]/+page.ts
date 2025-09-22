import { type MechKey, mechs } from '$lib/mechs';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const mech = mechs[params.mech as MechKey];
  return mech;
};
