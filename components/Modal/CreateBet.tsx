import React from "react";
import Modal from ".";

const CreateBet = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
}) => {
	return (
		<Modal open={open} setOpen={setOpen}>
			<div className="flex items-center justify-center w-full h-full">
				<div className="w-full max-w-sm bg-white shadow-lg rounded-xl">
					<div className="px-4 py-5 sm:p-6">
						<p className="text-xl font-bold text-gray-900">
							Make a prediction
						</p>
						{/* <p className="mt-3 text-sm font-medium text-gray-500">
							Lorem ipsum dolor sit amet, consec tetur adipiscing
							elit.
						</p> */}

						<form action="#" method="POST" className="mt-6">
							<div className="space-y-4">
								<div className="w-full flex items-center">
									<label
										for=""
										className="text-sm font-bold text-gray-900 flex-1"
									>
										Select your team
									</label>
									<div className="mt-2 ml-1 flex-1">
										<select className="block w-full py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
											<option>RCB</option>
											<option>RR</option>
										</select>
									</div>
								</div>

								<div className="w-full flex items-center">
									<label
										for=""
										className="text-sm font-bold text-gray-900 flex-1"
									>
										Enter betting amount
									</label>
									<div className="mt-2 ml-1 flex-1">
										<input
											type="text"
											name=""
											id=""
											placeholder="John Doe"
											value=""
											className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
										/>
									</div>
								</div>
								<div className="flex items-center justify-end w-1/2 ml-auto">
									<span className="p-1 border-2 border-black rounded-md">
										10 MATIC
									</span>
									<span className="p-1 border-2 border-black rounded-md">
										25 MATIC
									</span>
									<span className="p-1 border-2 border-black rounded-md">
										50 MATIC
									</span>
								</div>
							</div>

							<div className="flex items-center justify-center mt-5 space-x-4">
								<button
									type="reset"
									className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
								>
									Cancel
								</button>

								<button
									type="submit"
									className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
								>
									Add
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default CreateBet;
