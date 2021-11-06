/* eslint-disable class-methods-use-this */
import { BolaoData } from 'models/request/CreateData';
import { BolaoResponse } from 'models/response/BolaoResponse';

import { HttpService } from './HttpService';

export class BolaoService {
  private readonly baseUrl;

  constructor() {
    this.baseUrl = 'canal';
  }

  public create(
    body: BolaoData,
  ): Promise<BolaoResponse> {
    const url = 'http://localhost:3001/bolao';

    return HttpService.doPost(url, {}, body) as Promise<
      BolaoResponse
    >;
  }
}
