import type { NextPage } from "next";
import { useState } from "react";
import { useAccount, useBalance } from "wagmi";

import BetCard from "../components/BetCard";
import CreateBet from "../components/Modal/CreateBet";

const Home: NextPage = () => {
	const [showWalletOptions, setShowWalletOptions] = useState(false);
	const [{ data: accountData, loading: accountLoading }] = useAccount();
	const [{ data: balanceData, loading: balanceLoading }] = useBalance({
		addressOrName: accountData?.address,
		watch: true,
	});

	const [showModal, setShowModal] = useState(false);

	const loading = (accountLoading || balanceLoading) && !balanceData;

	return (
		<>
			{/* <WalletOptionsModal
				open={showWalletOptions}
				setOpen={setShowWalletOptions}
			/> */}
			<div className="mb-8">
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
