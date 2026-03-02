import meta from './meta.json' assert { type: 'json' };

export async function loadFormulaTemplate(): Promise<string> {
  const url = new URL('./index.formula', import.meta.url);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load formula: ${res.status}`);
  }
  return res.text(); // UTF-8 by default
};

export async function compileFormulaTemplate(args = {}) {
  const resolved = { fieldName: 'Field', ...args };
  const template = await loadFormulaTemplate();
  
  return Object.entries(resolved).reduce(
    (src, [key, val]) => src.replaceAll(`{${key}}`, val),
    template
  );
};

export { meta };

export default {loadFormulaTemplate as loadFormula, compileFormulaTemplate as compile, meta };
