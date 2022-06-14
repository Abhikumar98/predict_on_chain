import { ethers } from "ethers";
import abi from "./abi.json";

export const contract = () => {
	if (!window || !window.ethereum) {
		throw new Error("window is not defined");
	}
	const { ethereum } = window;
	const provider = new ethers.providers.Web3Provider(ethereum as any);
	const signer = provider.getSigner();
	return new ethers.Contract(
		"0xc2D22958E921122811AF3a6Bf9405e295AA497aD",
		abi,
		signer
	);
};
