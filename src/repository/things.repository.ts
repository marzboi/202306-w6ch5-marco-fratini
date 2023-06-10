import fs from 'fs/promises';
import createDebug from 'debug';
const debug = createDebug('W6:SampleRepo');

type Things = {
  id: string;
  things: string;
  origin: string;
};

const file = './things.json';

export class ThingsRepo {
  constructor() {
    debug('Things Repo');
  }

  async readAll() {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    return JSON.parse(stringData) as Things[];
  }

  async create(body: Things) {
    const data = await fs.readFile(file, 'utf-8');
    let things = JSON.parse(data);
    things = [...things, body];
    const updatedData = JSON.stringify(things, null, 2);
    await fs.writeFile(file, updatedData, { encoding: 'utf-8' });
  }
}
