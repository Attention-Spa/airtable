export const meta = import.meta;
const templateUrl = new URL(import.meta.url, `./formula`);
export const tUrl = templateUrl.toString();
export {templateUrl}

export const templateText = await fetch(templateUrl).then(r => r.text());

// const formulaSource = await fetch(`${meta.url}/${index.formula}`).then(r => r.text());
export metaJson from './meta.json';
