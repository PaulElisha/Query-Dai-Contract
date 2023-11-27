const { providers, Contract, utils } = require("ethers");
require("dotenv").config();

const { ALCHEMY_API_KEY } = process.env;

const provider = new providers.JsonRpcProvider(ALCHEMY_API_KEY);

const ERC20_ABI = [
    "function name() public view returns (string)",
    "function symbol() public view returns (string)",
    " function decimals() public view returns (uint8)",
    "function totalSupply() public view returns (uint256)"
]

const daiContract = async () => {
    const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
    const contract = new Contract(address, ERC20_ABI, provider);
    try {
        const symbol = await contract.symbol();
        const tokenName = await contract.name();
        const totalSupply = await contract.totalSupply();
        const Decimals = await contract.decimals();

        console.log('Symbol:', symbol);
        console.log('TokenName:', tokenName);
        console.log('TotalSupply:', utils.formatEther(totalSupply));
        console.log('Decimals:', Decimals);
    } catch (error) {
        console.log(error);
        console.log('Error: Network Error');
    }

}

daiContract();