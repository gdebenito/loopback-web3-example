import { getService, juggler } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { ContractDataSource } from '../datasources/contract.datasource';
import { Modules as Web3 } from 'web3';

export class ContractProvider implements Provider<any> {
	constructor(
		@inject('datasources.Contract')
		protected dataSource: juggler.DataSource = new ContractDataSource(),
	) { }

	value(): Promise<any> {
		return getService(this.dataSource);
	}
}
