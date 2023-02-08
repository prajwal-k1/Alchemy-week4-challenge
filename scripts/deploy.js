const hre = require("hardhat");

const contractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

async function main() {
  const MyContract = await hre.ethers.getContractFactory("NannaContract");
  const myContract = await MyContract.deploy(contractAddress);

  await myContract.deployed();
  console.log("contract deployed to : ", myContract.address);

  await myContract.attemptNaKari();
  console.log("call successfull");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
