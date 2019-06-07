pragma solidity >=0.4.21 <0.6.0;

contract SimpleStorage {
	// id => state => dataHash
	mapping(uint256 => mapping(uint256 => uint256)) map;

	modifier hasValid(uint256 state) {
		require(0 <= state && state <= 3);
		_;
	}

	function setHash(uint256 id, uint256 state, uint256 dataHash)
		public
		payable
		hasValid(state)
	{
		map[id][state] = dataHash;
	}

	function getHash(uint256 id, uint256 state)
		public
		view
		hasValid(state)
		returns (uint256 dataHash)
	{
		return map[id][state];
	}

	function getHashArray(uint256 id)
		public
		view
		returns (uint256[4] memory dataHash)
	{
		return [map[id][0], map[id][1], map[id][2], map[id][3]];
	}
}
