import { getService, juggler } from '@loopback/service-proxy';
import { inject, Provider, bind } from '@loopback/core';
import { ContractDataSource } from '../datasources/contract.datasource';
import { CONTRACT_PROVIDER } from '../keys';

@bind.provider({ tags: { key: CONTRACT_PROVIDER } })
export class ContractProvider implements Provider<any> {
	constructor(
		@inject('datasources.Contract')
		protected dataSource: juggler.DataSource = new ContractDataSource(),
	) { }

	value(): Promise<any> {
		return getService(this.dataSource);
	}
}
