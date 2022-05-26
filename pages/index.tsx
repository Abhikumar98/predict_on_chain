import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";
import BetCard from "../components/BetCard";
import Modal from "../components/Modal";
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

	const renderContent = () => {
		if (loading) return <Loader size={8} />;
		if (balanceData) {
			return (
				<>
					<h1 className="mb-8 text-4xl font-bold">My Wallet</h1>
					<div className="inline-flex place-items-center">
						<h6 className="ml-2 text-2xl">{`Ξ ${Number(
							balanceData?.formatted
						).toFixed(4)} ${balanceData?.symbol}`}</h6>
					</div>
				</>
			);
		}

		return (
			<>
				<h1 className="mb-8 text-4xl font-bold">
					Welcome to the NextJS wagmi template!
				</h1>
				<Button
					loading={accountLoading}
					onClick={() => setShowWalletOptions(true)}
				>
					Connect to Wallet
				</Button>
			</>
		);
	};

	return (
		<>
			{/* <WalletOptionsModal
				open={showWalletOptions}
				setOpen={setShowWalletOptions}
			/> */}

			<section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
				<div className="px-4 mx-auto sm:px-6">
					<div className="grid grid-cols-2 gap-5 mt-12 text-center sm:mt-16 lg:grid-cols-4 lg:gap-0">
						<div
							className="flex flex-col border border-gray-200 lg:-mt-px lg:-ml-px bg-gray-200"
							onClick={() => setShowModal(true)}
						>
							Make new prediction
						</div>
						<BetCard />
						<CreateBet open={showModal} setOpen={setShowModal} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
