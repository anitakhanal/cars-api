import fs from 'fs';

export function getAPIDetails() {
  const data = fs.readFileSync(process.cwd() + '/package.json').toString();

  const parsedData = JSON.parse(data);

  return {
    name: parsedData.name,
    version: parsedData.version,
    description: parsedData.description,
  };
}