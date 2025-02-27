import { extendEnvironment } from "hardhat/config"

type NetworkConfiguration = {
     
    chainId: number,
   
    nftAddress: string,

    params: {
        chainId: string,
        rpcUrls:string[],
        chainName: string,
        nativeCurrency: {
            name: string,
            symbol: string,
            decimals: number
        },
        blockExplorerUrls:string []

    }[]
}
 const confs: NetworkConfiguration[]=[ {
    
    chainId: 0x7A69,
   
    nftAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    
    params: [{
        chainId: '0x7A69',
        rpcUrls: ["http://127.0.0.1:8545/"],
        chainName: "localhost-hardhat",
        nativeCurrency: {
            name: "MYETH",
            symbol: "MYETH",
            decimals: 18
        },
        blockExplorerUrls: ["https://polygonscan.com/"]

    }]
},
{
    chainId: 0xaa36a7,
    nftAddress: "0x77c15E872ddf5Cc392c01B9cC9c6d227D75D9447",
    params: [{
        chainId: '0xaa36a7',
        rpcUrls: ["https://sepolia.infura.io/v3/2f18ffbdd979436fbc7495b813788fbb"],
        chainName: "sepolia",
        nativeCurrency: {
            name: "SepoliaETH",
            symbol: "SepoliaETH",
            decimals: 18
        },
        blockExplorerUrls: ["https://sepolia.etherscan.io"]
    }]
}
]
export const configuration = ()=> confs[selection]
const selection = 1
export const rpcUrl = ()=>{
    return confs[selection].params[0].rpcUrls[0];
}
export const IPFS =  {domain:"127.0.0.1", url_prefix:"http://127.0.0.1:808/ipfs/"}
export const ARWEAVE =  {domain:"127.0.0.1", port: 1984, protocol:"http", url_prefix:"http://127.0.0.1:1984/"}

