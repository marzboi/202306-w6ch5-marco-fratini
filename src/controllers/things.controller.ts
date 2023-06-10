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
    response.send(await this.repo.readByID(request.body.id));
  }

  async post(request: Request, response: Response) {
    response.send(await this.repo.create(request.body));
  }

  async patch(request: Request, response: Response) {
    response.send(await this.repo.update(request.body, request.params.id));
  }

  async deleteById(request: Request, response: Response) {
    response.send(await this.repo.delete(request.body.id));
  }
}
