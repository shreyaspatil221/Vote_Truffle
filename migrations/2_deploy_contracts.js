var Voting = artifacts.require("./Voting.sol");
module.exports = function(deployer) {
  deployer.deploy(Voting, ['Sachit','Mansi','Deepanshu','Nishkarh','Akshay','Mandar','Shreyas'], {gas: 4500000});
};