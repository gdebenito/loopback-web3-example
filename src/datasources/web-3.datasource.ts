import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as config from './web-3.datasource.json';

export class Web3DataSource extends juggler.DataSource {
	static dataSourceName = 'Web3';

	constructor(
		@inject('datasources.config.Web3', { optional: true })
		dsConfig: object = config,
	) {
		super(dsConfig);
	}
}
