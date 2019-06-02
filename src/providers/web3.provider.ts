import { getService, juggler } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { Web3DataSource } from '../datasources/web-3.datasource';
import { Modules as Web3Service } from 'web3';

export class Web3Provider implements Provider<Web3Service> {
	constructor(
		@inject('datasources.Web3')
		protected dataSource: juggler.DataSource = new Web3DataSource(),
	) { }

	value(): Promise<Web3Service> {
		return getService(this.dataSource);
	}
}
