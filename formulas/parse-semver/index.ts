import meta from './meta.json' assert { type: 'json' };

export async function loadFormulaTemplate(): Promise<string> {
  const url = new URL('./formula.md', import.meta.url);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load formula: ${res.status}`);
  }
  return res.text(); // UTF-8 by default
};

function compileFormula(init: { template: string, args: Record<string, unknown> }) {

  const { template, args = {} } = init ?? {};
  const resolved = { fieldName: 'Field', ...args };

  return Object.entries(resolved).reduce(
    (src, [key, val]) => src.replaceAll(`{${key}}`, val),
    template
  );
};

export { meta, compileFormula };

export default { loadFormulaTemplate, compileFormula, meta };
