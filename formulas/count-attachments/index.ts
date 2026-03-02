export const meta = import.meta;
const templateUrl = new URL(import.meta.url, `./formula`);
const tUrl = templateUrl.toString();
export {templateUrl, tUrl}

// export const templateText = await fetch(templateUrl).then(r => r.text());

// const formulaSource = await fetch(`${meta.url}/${index.formula}`).then(r => r.text());
export metaJson from './meta.json';
