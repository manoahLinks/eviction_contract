import { ethers } from "hardhat";

// txhash: 0xec6ab338b17de0bbfb5395cc445995778c41ed34d7cf1de8f28394641f99a815

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