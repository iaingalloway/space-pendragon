import { Forms, type FormKey } from '$lib/forms';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const legend = Forms[params.form as FormKey];
  return legend;
};
