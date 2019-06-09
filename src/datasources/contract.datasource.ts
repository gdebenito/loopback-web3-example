import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as config from './contract.datasource.json';

export class ContractDataSource extends juggler.DataSource {
  static dataSourceName = 'Contract';

  constructor(
    @inject('datasources.config.Contract', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
