export const importMeta = import.meta;
// export const templateTextPath = [import.meta.url, "template"];

import metaJsonData from "./meta.json";
export { metaJsonData };

export default { metaJsonData, importMeta }
//const formulaSource = await fetch(`${meta.url}/${index.formula}`).then(r => r.text());

