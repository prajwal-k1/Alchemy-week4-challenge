# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# Challenge

The goal was to Emit the winner event on a smart contract in the Goerli testnet: https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code

We had to find a way to make it so the tx.origin (the EOA who originated the transaction) is not equal to the msg.sender, so I basically created an interface and with that I called the main contract using its address.
