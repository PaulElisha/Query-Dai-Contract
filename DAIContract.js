const { ethers } = require("ethers");

const provider = new ethers.getDefaultProvider('mainnet');

const ERC20_ABI = [
    "function name() public view returns (string)",
    "function symbol() public view returns (string)",
    " function decimals() public view returns (uint8)",
    "function totalSupply() public view returns (uint256)"
]
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);


const daiContract = async () => {
    const symbol = await contract.symbol();
    const tokenName = await contract.name();
    const totalSupply = await contract.totalSupply();
    const Decimals = await contract.decimals();

    console.log('Symbol:', symbol);
    console.log('TokenName:', tokenName);
    console.log('TotalSupply:', totalSupply);
    console.log('Decimals:', Decimals);
}

daiContract();