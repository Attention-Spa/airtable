import meta from './meta.json' assert { type: 'json' };

export async function loadFormulaTemplate(): Promise<string> {
  const url = new URL('./formula.md', import.meta.url);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load formula: ${res.status}`);
  }
  return res.text(); // UTF-8 by default
};

export function compileFormula({template: string, args: Record<string, unknown> = {} }) {
  
  const resolved = { fieldName: 'Field', ...args };
  
  return Object.entries(resolved).reduce(
    (src, [key, val]) => src.replaceAll(`{${key}}`, val),
    template
  );
};

export { meta };

export default {loadFormulaTemplate, compileFormula, meta };
