import { type FormKey, forms } from '$lib/forms';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const legend = forms[params.form as FormKey];
  return legend;
};
