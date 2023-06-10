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

  async readByID(id: string) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const data = JSON.parse(stringData);
    return data.find((item: Things) => item.id === id);
  }

  async create(body: Things) {
    const data = await fs.readFile(file, 'utf-8');
    let things = JSON.parse(data);
    things = [...things, body];
    const updatedData = JSON.stringify(things, null, 2);
    await fs.writeFile(file, updatedData, { encoding: 'utf-8' });
  }

  async update(body: Things, id: string) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const data = JSON.parse(stringData);
    const updatedThings = data.map((item: Things) =>
      item.id === id ? body : item
    );
    await fs.writeFile(file, JSON.stringify(updatedThings, null, 2), {
      encoding: 'utf-8',
    });
  }

  async delete(id: string) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const data = JSON.parse(stringData) as Things[];
    const updatedData = data.filter((item) => item.id !== id);
    await fs.writeFile(file, JSON.stringify(updatedData, null, 2), {
      encoding: 'utf-8',
    });

    return updatedData;
  }
}
