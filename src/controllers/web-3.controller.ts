import { inject } from '@loopback/context';
import { WEB3_PROVIDER } from "../keys";
import Web3 from "web3";
import { get } from '@loopback/rest';

export class Web3Controller {
	constructor(
		@inject(WEB3_PROVIDER) private web3: Web3
	) { }


	@get('/accounts')
	public async getAccounts() {
		return await this.web3.eth.getAccounts();
	}
}
