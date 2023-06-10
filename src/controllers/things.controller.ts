import { Request, Response } from 'express';
import { ThingsRepo } from '../repository/things.repository.js';
import createDebug from 'debug';
const debug = createDebug('Things:ThingsController');

export class ThingsController {
  repo: ThingsRepo;
  constructor() {
    this.repo = new ThingsRepo();
    debug('Instantiated thingsController');
    debug(this.repo);
  }

  async getAll(request: Request, response: Response) {
    response.send(await this.repo.readAll());
  }

  async getById(request: Request, response: Response) {
    const data = await this.repo.readAll();
    const thingID = data.find((item) => item.id === request.params.id);
    response.send(thingID);
  }

  post(request: Request, response: Response) {
    response.send('Post Sample!: ' + request.body.user);
  }

  patch(request: Request, response: Response) {
    response.send('Patch Sample!: ' + request.body.user);
  }

  deleteById(request: Request, response: Response) {
    response.send('Delete Sample!: ' + request.body.user);
  }
}
