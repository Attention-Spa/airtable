export const meta = import.meta;
export const formulaSourceCodePath = `${meta.url}/${index.formula}`;
// const formulaSource = await fetch(`${meta.url}/${index.formula}`).then(r => r.text());
export metaJson from './meta.json';

export default {formulaSourceCodePath, meta, metaJson};
