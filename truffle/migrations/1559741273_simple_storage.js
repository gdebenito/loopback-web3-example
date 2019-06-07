const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function (deployer) {
  await deployer.deploy(SimpleStorage);
  let instance = await SimpleStorage.deployed();
  console.log(instance.contract.options.address);
};
