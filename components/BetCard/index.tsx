import React from "react";

interface IBetCard {
	won?: boolean;
	shouldClaim?: boolean;
	betAgainst?: boolean;
}

const BetCard: React.FC<IBetCard> = ({ won, shouldClaim, betAgainst }) => {
	return (
		<div className="flex flex-col border border-gray-200 lg:-mt-px lg:-ml-px">
			<div className="flex flex-col items-center flex-1 px-4 my-6">
				<p className="text-base font-bold tracking-widest text-gray-400 uppercase">
					IPL
				</p>
				<h3 className="text-base font-bold text-gray-900 mt-2.5">
					RCB vs RR
				</h3>
				<p className="flex-1 mt-3 text-xs font-bold text-gray-500">
					10 MATIC
				</p>
				<p className="flex-1 mt-3 text-xs text-gray-500">
					vitalik.eth has predicted RCB's victory with{" "}
					<span className="">10 MATIC</span>
				</p>
				<button
					type="button"
					className="inline-flex items-center justify-center px-6 py-3 mt-6 text-sm font-bold text-white transition-all duration-200 bg-gray-900 rounded-md sm:px-12 focus:outline-none hover:bg-gray-700"
				>
					{shouldClaim
						? "Claim"
						: won
						? "You won"
						: betAgainst
						? "Bet Against"
						: "You Lost"}
				</button>
			</div>
		</div>
	);
};

export default BetCard;
