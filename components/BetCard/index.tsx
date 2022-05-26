import React from "react";

const BetCard = () => {
	return (
		<div className="flex flex-col border border-gray-200 lg:-mt-px lg:-ml-px">
			<div className="flex-shrink-0">
				<img
					className="object-contain mx-auto mix-blend-multiply"
					src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/10/product-4.png"
					alt=""
				/>
			</div>
			<div className="flex flex-col items-center flex-1 px-4 pb-8">
				<p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
					IPL
				</p>
				<h3 className="text-base font-bold text-gray-900 mt-2.5">
					RCB vs RR
				</h3>
				<p className="flex-1 mt-3 text-base font-bold text-gray-500">
					10 MATIC
				</p>
				<button
					type="button"
					className="inline-flex items-center justify-center px-6 py-3 mt-6 text-sm font-bold text-white transition-all duration-200 bg-gray-900 rounded-md sm:px-12 focus:outline-none hover:bg-gray-700"
				>
					Bet Against
				</button>
			</div>
		</div>
	);
};

export default BetCard;
