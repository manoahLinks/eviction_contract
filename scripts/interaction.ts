import { ethers } from "hardhat";

const main = async () => {

    const calculatorFactoryContractAddress = "0xccf05a0114Fa51114865c80B0c37E84876a0b7eA";

    const CalculatorFactory = await ethers.getContractFactory("CalculatorFactory");
    
    const calculatorFactory = CalculatorFactory.attach("0xccf05a0114Fa51114865c80B0c37E84876a0b7eA");


    const createCalculatorTxn = await calculatorFactory.createCalculatorInstance(2);
    await createCalculatorTxn.wait()
    // console.log("Stake: ", stakeBalanceTxn);
    
  console.log(createCalculatorTxn)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});