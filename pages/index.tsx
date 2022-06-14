import type { NextPage } from "next";
import { stringify } from "querystring";
import { useState } from "react";
import { useAccount, useBalance } from "wagmi";

import BetCard from "../components/BetCard";
import CreateBet from "../components/Modal/CreateBet";
import { contract } from "../utils/crypto";
import { ethers } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
const Home: NextPage = () => {
	const [showWalletOptions, setShowWalletOptions] = useState(false);
	const [{ data: accountData, loading: accountLoading }] = useAccount();
	const [{ data: balanceData, loading: balanceLoading }] = useBalance({
		addressOrName: accountData?.address,
		watch: true,
	});

	const [showModal, setShowModal] = useState(false);

	const loading = (accountLoading || balanceLoading) && !balanceData;

	const fetchCurrentBetId = async () => {
		const res = await contract().match_id();
		console.log(res);
	};

	const updateContractOwners = async(addOwnerAddress: string) =>{
		var name:any = accountData?.address; 
		const updateOwnerTx =  await contract().updateOwners( addOwnerAddress, {from: name} );
		await updateOwnerTx.wait();
		return updateOwnerTx;
	}

	const removeContractOwners = async(removeOwnerAddress: string) =>{
		var name:any = accountData?.address; 
		const removeOwnerTx =  await contract().removeOwner( removeOwnerAddress, {from: name} );
		await removeOwnerTx.wait();
		return removeOwnerTx;
	}

	const createMatchs = async (teamOne: string, teamTwo: string)=> {
		var name:any = accountData?.address; 
		const matchTransaction = await await contract()._createMatchs(teamOne, teamTwo, {from: name});
		await matchTransaction.wait()
		return matchTransaction;
	}

	const createBet = async (matchId: any,teamName: string, maticAmount: string)=> {
		const createBetTransaction = await contract()._createBet(matchId, teamName, { value: ethers.utils.parseEther(maticAmount) });
		await createBetTransaction.wait();
		return createBetTransaction;
	}
	const joinBet = async (matchId: any)=> {
		const joinBetTransaction = await contract()._joinBet(matchId);
		await joinBetTransaction.wait();
		return joinBetTransaction;
	} 
	const setClaimableAmount = async (claimAddress: string,maticAmount: string)=> { 
		var name:any = accountData?.address; 
		const claimAmtTransaction =  await contract().setbetWinnerAmountClaimable(claimAddress,{ value: ethers.utils.parseEther(maticAmount) }, {from: name} );
		await claimAmtTransaction.wait();
		return claimAmtTransaction;
	}
	const updateWinningTeam = async (matchId: any, winTeamName: string) =>{
		var name:any = accountData?.address; 
		const updateWinningTeamFuncTx =  await contract().updateWinningTeam(matchId,winTeamName, {from:name});
		await updateWinningTeamFuncTx.wait();
		return updateWinningTeamFuncTx;
	}

	const claimWinning = async ()=>{
		var name:any = accountData?.address; 
		const claimWinningFuncTx =  await contract().connect(name).claimYourWinning();
		await claimWinningFuncTx.wait();
		return claimWinningFuncTx;
	}

	const withdrawContractTotalFunds = async()=>{
		var name:any = accountData?.address; 
		const withdrawFundTx =  await contract().withdrawFunds({from: name});
		await withdrawFundTx.wait();
		return withdrawFundTx;
		
	}

	const toggleContractStatus = async()=>{
		var name:any = accountData?.address; 
		const toggleContracttx =  await contract().connect(name).toggleStatus();
		await toggleContracttx.wait();
		return toggleContracttx;
		
	}
	return (
		<>
			{/* <WalletOptionsModal
				open={showWalletOptions}
				setOpen={setShowWalletOptions}
			/> */}
			<div className="mb-8">
				<button onClick={fetchCurrentBetId}>Fetch bet id</button>
				<div className="mb-4">My Bets</div>
				<div className="mx-auto">
					<div className="grid grid-cols-2 gap-5 text-center lg:grid-cols-4 ">
						<BetCard won />
						<BetCard shouldClaim />
						<BetCard betAgainst />
					</div>
				</div>
			</div>
			<div className="mb-8">
				<div className="mb-4">Ongoing Bets</div>
				<div className="mx-auto">
					<div className="grid grid-cols-2 gap-5 text-center lg:grid-cols-4 ">
						<div
							className="flex flex-col border border-gray-200 lg:-mt-px lg:-ml-px bg-gray-200 justify-center items-center cursor-pointer"
							onClick={() => setShowModal(true)}
						>
							<span>Make new prediction</span>
						</div>
						<BetCard />
						<BetCard />
						<BetCard />
						<BetCard />
						<BetCard />
						<CreateBet open={showModal} setOpen={setShowModal} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
