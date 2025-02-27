import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  paths:{
    artifacts: "./src/artifacts"
    
    },
    networks: {
      sepolia: {
        url: "https://sepolia.infura.io/v3/2f18ffbdd979436fbc7495b813788fbb",
        accounts: ["529731d41382af96ff2d0d7fbe6ed6e15d299539250301d054081fffa5d2848e"],
      },
    },
};

export default config;
